const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')

let window = null

app.once('ready', () => {
  window = new BrowserWindow({
    width: 1160,
    height: 640,
    icon: __dirname + '/imgs/favicon.ico',
    show: false,
    resizable: true,
    webPreferences:{
      nodeIntegration: false,
      show: false
  }
  })

  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

  Menu.setApplicationMenu(null)

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.once('ready-to-show', () => {
    window.show()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
