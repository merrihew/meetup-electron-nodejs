const { 
    app, 
    globalShortcut, 
    shell,
    BrowserWindow,
    Menu, 
    MenuItem, 
    Notification, 
    Tray 
} = require('electron')

const path = require('path')

const trayImageDir = path.join(__dirname, `../build/tray/`);
const TrayImages = {
    Prototype: `${trayImageDir}/icons8-prototype-16.png`,
    DoubleDown: `${trayImageDir}/icons8-double-down-16.png`
}

app.on('will-finish-launching', () => {
    app.dock.hide()
})

app.on('ready', () => {    
    const menu = Menu.buildFromTemplate([
        {
            label: 'About',
            id: 'about',
            click() {
                shell.openExternal(`https://www.meetup.com/Atlanta-Nodejs-Developers/`)
            }
        },
        {
            type: 'separator'
        },
        {
            label: 'Features',
            id: 'features',
            submenu: [
                {
                    label: 'Notification',
                    id: 'features-notification',
                    click() {
                        new Notification({
                            title: 'Hello Node.js Meetup',
                            subtitle: 'Notifications are working'
                        })
                        .show()
                    }
                }
            ]
        },
        {
            label: 'Shortcuts',
            id: 'shortcuts',
            submenu: [
                {
                    label: 'cmd+1',
                    type: 'checkbox',
                    id: 'shortcuts-cmd-1',
                    click(menuItem, browserWindow, event) {
                        let shortcut = `CommandOrControl+1`;
                        if (menuItem.checked) {
                            globalShortcut.register(shortcut, () => {
                                console.log(`${shortcut} triggered`)
                            })
                        } else {
                            globalShortcut.unregister(shortcut);
                        }
                    }
                }
            ]
        }
    ])

    const tray = new Tray(TrayImages.Prototype)
    tray.setContextMenu(menu)
})

process.on('uncaughtException', console.error)
