/**
 * Electron Config
  */
const { BrowserWindow } = require('electron')

class AppConfig extends BrowserWindow {
  constructor(config, urlLocation) {
    const basicConfig = {
      width: 1024,
      height: 768,
      show: false,
      backgroundColor: '#efefef',
      webPreferences: {
        contextIsolation: false,
        webSecurity: false,
        enableRemoteModule: true,
        nodeIntegrationInWorker: true,
        nodeIntegration: true
      }
    }
    const finalConfig = { ...basicConfig, ...config }
    super(finalConfig)
    this.webContents.openDevTools()
    this.loadURL(urlLocation)
    this.once('ready-to-show', () => {
      this.show()
    })
  }
}

module.exports = AppConfig
