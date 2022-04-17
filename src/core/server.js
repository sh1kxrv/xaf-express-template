const { successfully } = require('./utils/logger')
const ModuleExtensions = require('../packages/module/module-extension')

const express = require('express')

class Server extends ModuleExtensions {
  constructor(port) {
    this.port = port
    this.app = express()
  }

  /**
   * Запуск сервера
   */
  start() {
    this.app.listen(config.PORT, () => {
      successfully(`Started up on port: ${config.PORT}`)
    })
  }
}

module.exports = Server
