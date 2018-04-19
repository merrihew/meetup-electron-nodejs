const { app } = require('electron')
const http = require('http')

const httpServer = http.createServer((req, res) => {
    res.end('Atlanta Node.js Meetup server')
})

app.on('ready', () => {
    httpServer.listen(8001)
})

app.on('before-quit', () => {
    httpServer.close()
})
