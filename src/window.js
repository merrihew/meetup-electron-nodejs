setupWindow() {
    this.window = new BrowserWindow({
        width: 300,
        height: 450,
        show: true,
        frame: true,
        fullscreenable: false,
        resizable: false,
        transparent: false,
        webPreferences: {
            backgroundThrottling: false
        }
    })
    .loadURL(`file://${path.join(__dirname, 'index.html')}`)
    
    return this.window
}
