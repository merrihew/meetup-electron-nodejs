const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    const window = new BrowserWindow({
        width: 640,
        height: 480,
        show: true,
        frame: true,
        fullscreenable: false,
        resizable: false,
        transparent: false,
        webPreferences: {
            backgroundThrottling: false
        }
    })
    .loadURL(`https://www.meetup.com/Atlanta-Nodejs-Developers/`)
})
