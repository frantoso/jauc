/* eslint-env node */
// express und http Module importieren. Sie sind dazu da, die HTML-Dateien
// aus dem Ordner "public" zu veröffentlichen.
const express = require('express')
const fs = require('fs')

const app = express()
const server = require('http').createServer(app)
const port = 8081

function dirExists (path) {
  try {
    return fs.statSync(path).isDirectory()
  } catch (err) {
    return false
  }
}

// Mit diesem Kommando starten wir den Webserver.
server.listen(port, function () {
  // Wir geben einen Hinweis aus, dass der Webserer läuft.
  console.log('Webserver is running on port %d', port)
})

let serverDirectory = __dirname

if (process.argv.length > 2 && dirExists(process.argv[2])) {
  serverDirectory = process.argv[2]
}

console.log(`Serving directory ${serverDirectory}`)

// Hier teilen wir express mit, dass die öffentlichen HTML-Dateien
// im Ordner "public" zu finden sind.
app.use(express.static(serverDirectory + '/'))

// Fertig. Wir haben unseren ersten, eigenen Webserver programmiert :-)
