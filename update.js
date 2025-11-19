/* eslint-env node */
const fs = require('fs')
const util = require('util')
const pPath = require('path')

const fsStat = util.promisify(fs.stat)
const fsCopy = util.promisify(fs.copyFile)
const fsMkdir = util.promisify(fs.mkdir)

const F7_IN_DIR = './node_modules/framework7/'
const F7_OUT_DIR = './f7/'

const f7Files = [
  'css/framework7.bundle.min.css',
  'js/framework7.bundle.min.js'
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
  for (const file of f7Files) {
    const sourceFile = `${F7_IN_DIR}${file}`
    const destinationFile = `${F7_OUT_DIR}${file}`
    await createOutDir(destinationFile)
    if (await isOutdated(sourceFile, destinationFile)) {
      console.log(`copying: ${sourceFile}`)
      await fsCopy(sourceFile, destinationFile)
    }
  }
}

async function update () {
  console.log('Updating files ...')

  await copyOtherFiles()
}

update().then(() => console.log('Finished'))
