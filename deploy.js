/* eslint-env node */
const fs = require('fs')
const util = require('util')
const pPath = require('path')

const fsOpen = util.promisify(fs.open)
const fsReadFile = util.promisify(fs.readFile)
const fsWriteFile = util.promisify(fs.writeFile)
const fsStat = util.promisify(fs.stat)
const fsCopy = util.promisify(fs.copyFile)
const fsUnlink = util.promisify(fs.unlink)
const exec = util.promisify(require('child_process').exec)
const fsMkdir = util.promisify(fs.mkdir)

const OUT_DIR = './site/'
const VERSION_FILE = 'version.json'

const projectFiles = [
  'favicon.ico',
  'f7/css/framework7.bundle.min.css',
  'f7/js/framework7.bundle.min.js',
  'images/jaucicon-128.png',
  'images/jaucicon-144.png',
  'images/jaucicon-152.png',
  'images/jaucicon-192.png',
  'images/jaucicon-512.png'
]

const htmlFiles = [
  'impressum.html',
  'index.html'
]

const jsFiles = [
  'sw.js',
  'script/conversions.js',
  'script/fomulas.js',
  'script/globalization.js',
  'script/localization.js',
  'script/program.js',
  'script/texts.js',
  'script/version.js',
  'script/translations.js'
]

const versionFiles = [
  'sw.js',
  'script/version.js'
]

const jsonFiles = [
  'manifest.json'
]

const cssFiles = [
  'css/jauc.css',
  'css/styles.css'
]

async function getFileUpdatedMs (path) {
  const stats = await fsStat(path)
  return stats.mtimeMs
}

async function isOutdated (inFile, outFile) {
  try {
    const dateIn = await getFileUpdatedMs(inFile)
    const dateOut = await getFileUpdatedMs(outFile)

    return dateIn > dateOut
  } catch {
    return true
  }
}

function getDirectory (filePath) {
  if (typeof filePath !== 'string' || filePath.trim() === '') {
    throw new Error('Invalid file path')
  }

  return pPath.dirname(filePath)
}

async function createOutDir (fileName) {
  try {
    const path = getDirectory(fileName)
    await fsMkdir(path, { recursive: true })
  } catch (err) {
    console.error(`Error creating directory from file ${fileName} :`, err)
  }
}

async function copyOtherFiles () {
  for (const file of projectFiles) {
    const sourceFile = file
    const destinationFile = `${OUT_DIR}${file}`
    await createOutDir(destinationFile)
    if (await isOutdated(sourceFile, destinationFile)) {
      console.log(`copying: ${sourceFile}`)
      await fsCopy(sourceFile, destinationFile)
    }
  }
}

async function minifyJsFile (file) {
  const outFile = `${OUT_DIR}${file}`
  if (await isOutdated(file, outFile)) {
    await createOutDir(outFile)
    console.log(`minify: ${file}-->${outFile}`)
    await exec(`terser --compress --mangle --output ${outFile} -- ${file}`)
  }
}

async function minifyJsFiles () {
  for (const file of jsFiles) {
    await minifyJsFile(file)
  }
}

async function minifyCssFile (file) {
  const outFile = `${OUT_DIR}${file}`
  if (await isOutdated(file, outFile)) {
    await createOutDir(outFile)
    console.log(`minify: ${file}-->${outFile}`)
    await exec(`cleancss -o ${outFile} -- ${file}`)
  }
}

async function minifyCssFiles () {
  for (const file of cssFiles) {
    await minifyCssFile(file)
  }
}

async function readTextFile (fileName) {
  const file = await fsOpen(fileName, 'r')
  return String(await fsReadFile(file))
}

async function readJsonFile (fileName) {
  const json = await readTextFile(fileName)
  return JSON.parse(json)
}

async function writeJsonFile (fileName, obj) {
  const file = await fsOpen(fileName, 'w')
  const json = JSON.stringify(obj)
  await fsWriteFile(file, json)
}

async function minifyJsonFile (file) {
  const outFile = `${OUT_DIR}${file}`
  if (await isOutdated(file, outFile)) {
    await createOutDir(outFile)
    console.log(`minify: ${file}-->${outFile}`)
    const json = await readJsonFile(file)
    await writeJsonFile(outFile, json)
  }
}

async function minifyJsonFiles () {
  for (const file of jsonFiles) {
    await minifyJsonFile(file)
  }
}

async function readHtmlFile (fileName) {
  const text = await readTextFile(fileName)
  const lines = text.split(/\r?\n/)

  let result = ''
  for (const line of lines) {
    result += `${line.trim()}\n`
  }

  return result
}

async function writeTextFile (fileName, content) {
  const file = await fsOpen(fileName, 'w')
  await fsWriteFile(file, content)
}

async function minifyHtmlFile (file) {
  const outFile = `${OUT_DIR}${file}`
  if (await isOutdated(file, outFile)) {
    await createOutDir(outFile)
    console.log(`minify: ${file}-->${outFile}`)
    const content = await readHtmlFile(file)
    await writeTextFile(outFile, content)
  }
}

async function minifyHtmlFiles () {
  for (const file of htmlFiles) {
    await minifyHtmlFile(file)
  }
}

async function readProjectVersion () {
  try {
    const text = await readTextFile(VERSION_FILE)
    return JSON.parse(text)
  } catch {
    return {
      major: 1,
      minor: 0,
      build: 0,
      revision: 0
    }
  }
}

async function writeProjectVersion (version) {
  try {
    const file = await fsOpen(VERSION_FILE, 'w')
    const text = JSON.stringify(version)
    await fsWriteFile(file, text)
  } catch (err) {
    console.log(`Cannot write version (${err})`)
  }
}

async function calculateProjectVersion (version) {
  const revisionCount = Number((await exec('git rev-list --all --count')).stdout)
  version.build = version.build + 1
  version.revision = revisionCount
}

async function addVersionToFile (file, version) {
  const fileName = `${OUT_DIR}${file}`
  let text = await readTextFile(fileName)
  const versionText = `${version.major}.${version.minor}.${version.build}.${version.revision}`
  text = text.replace('{{{version}}}', versionText)
  await writeTextFile(fileName, text)
}

async function commitVersion () {
  await exec(`git commit -m "new version number" -o ${VERSION_FILE}`)
}

async function updateProjectVersion () {
  const version = await readProjectVersion()
  await calculateProjectVersion(version)
  await writeProjectVersion(version)
  await commitVersion()

  return version
}

async function addVersionToFiles () {
  const version = await updateProjectVersion()

  for (const file of versionFiles) {
    await addVersionToFile(file, version)
  }
}

async function deleteVersionFiles () {
  for (const file of versionFiles) {
    try { await fsUnlink(`${OUT_DIR}${file}`) } catch { }
  }
}

async function minifyToDeployDir () {
  await minifyJsFiles()
  await minifyCssFiles()
  await minifyJsonFiles()
  await minifyHtmlFiles()
}

// async function areOpenCommits () {
//   const out = (await exec('git status --porcelain')).stdout
//   return !!out
// }

async function deploy () {
  // if (await areOpenCommits()) {
  //   console.log('Please checkin all files first.')
  //   console.log('Aborting ...')
  //   return
  // }

  console.log('Deploying files...')

  // to refresh the version, these files must get a fresh copy
  await deleteVersionFiles()
  await minifyToDeployDir()
  await copyOtherFiles()

  await addVersionToFiles()
}

deploy().then(() => console.log('Finished'))
