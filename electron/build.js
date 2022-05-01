const { app, Menu } = require('electron')
const isDev = require('electron-is-dev')
const AppWindow = require('./config/app.config.js')
const menuItems = require('./config/menu.config.js')
const path = require('path')
import logger from 'electron-log'

// 启用日志记录功能
logger.transports.file.level = 'debug'
logger.transports.file.maxSize = 1002430 // 10M
logger.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}'
let date = new Date()
date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
logger.transports.file.file = app.getPath('userData') + '/electron_log/app/' + date + '.log'

// 启用 App 监听
app.on('ready', () => {
  const mainWindowConfig = {
    width: 1440,
    height: 768
  }
  const urlLocation = isDev
    ? 'http://localhost:8080'
    : `file://${path.join(__dirname, './index.html')}`
  logger.warn('真实地址: ' + urlLocation)

  let mainWindow = new AppWindow(mainWindowConfig, urlLocation)
  mainWindow.on('closed', () => {
    mainWindow = null
    app.quit()
  })
  const menu = Menu.buildFromTemplate(menuItems)
  Menu.setApplicationMenu(menu)
})
