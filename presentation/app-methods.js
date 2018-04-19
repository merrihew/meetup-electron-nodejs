const { app } = require('electron')

app.on('ready', () => {
    const appName = app.getName()
    console.log(`app.getName() => ${appName}`)
    const appVersion = app.getVersion()
    console.log(`app.getVersion() => ${appVersion}`)
    const appPath = app.getAppPath()
    console.log(`app.getAppPath() => ${appPath}`)
    const appMetrics = app.getAppMetrics()
    console.log(`app.getAppMetrics() => ${JSON.stringify(appMetrics, null, 2)}`)
})

