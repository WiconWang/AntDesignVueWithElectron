/**
 * electron 菜单配置
 * From https://electronjs.org/docs/api/menu-item
 */
const { shell } = require('electron')

const menuItems = [
  {
    label: '文件',
    submenu: [
      {
        label: '首页',
        click: () => {
          shell.openExternal('/')
        }
      },
      {
        label: '搜索',
        accelerator: 'CmdOrCtrl+F',
        click: (menuItem, browserWindow, event) => {
          browserWindow.webContents.send('search-file')
        }
      },
      {
        label: '重新加载',
        accelerator: 'CmdOrCtrl+F5',
        role: 'reload'
      },
      {
        label: '退出',
        accelerator: 'CmdOrCtrl+Q',
        role: 'quit'
      }
    ]
  },
  {
    label: '帮助',
    role: 'help',
    submenu: [
      {
        label: '关于我们',
        click: () => {
          shell.openExternal('http://www.hangyutech.com')
        }
      }
    ]
  }
]

module.exports = menuItems
