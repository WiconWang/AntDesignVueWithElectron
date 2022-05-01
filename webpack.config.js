const path = require('path')
module.exports = {
  mode: 'production',
  target: 'electron-main',
  entry: './electron/build.js',
  output: { path: path.resolve(__dirname, './build-electron'), filename: 'build.js' },
  node: {
    __dirname: false
  }
}
