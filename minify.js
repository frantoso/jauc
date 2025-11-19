/* eslint-env node */
const fs = require('fs')
const util = require('util')

const fsStat = util.promisify(fs.stat)
const fsReaddir = util.promisify(fs.readdir)
const exec = util.promisify(require('child_process').exec)

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

async function minifyJsFiles () {
  const files = (await fsReaddir('script', { withFileTypes: true }))
    .filter(item => item.isFile() && item.name.endsWith('.js'))
    .map(item => item.name)

  for (const file of files) {
    const inFile = `script/${file}`
    const outFile = `jsmin/${file}`
    if (await isOutdated(inFile, outFile)) {
      console.log(`minify: ${inFile}-->${outFile}`)
      await exec(`terser --compress --mangle --output ${outFile} -- ${inFile}`)
    }
  }
}

async function minifyCssFile (baseName) {
  const inFile = `css/${baseName}.css`
  const outFile = `css/${baseName}-min.css`
  if (await isOutdated(inFile, outFile)) {
    console.log(`minify: ${inFile}-->${outFile}`)
    await exec(`cleancss -o ${outFile} -- ${inFile}`)
  }
}

async function minify () {
  console.log('Minifying files...')

  minifyJsFiles()
  minifyCssFile('jauc')
  minifyCssFile('styles')
}

minify()
