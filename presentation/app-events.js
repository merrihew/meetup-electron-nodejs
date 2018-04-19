const { app } = require('electron')

app.on('ready', () => console.log(`Electron has finished initializing`))
app.on('open-file', () => console.log(`User wants to open a file`))
app.on('open-url', () => console.log(`User wants to open a URL`))
app.on('before-quit', () => console.log(`Before the application starts closing its windows`))
app.on('window-all-closed', () => console.log(`All windows have been closed`))
