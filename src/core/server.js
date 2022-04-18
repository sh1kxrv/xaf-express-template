const { successfully } = require('../utils/logger')
const ModuleExtensions = require('../packages/module/module-extension')

const express = require('express')

const { PrismaClient } = require('@prisma/client')

class Server extends ModuleExtensions {
  constructor(port) {
    super()
    this.port = port
    this.prisma = new PrismaClient()
    this.app = express()
  }

  /**
   * Запуск сервера
   */
  start() {
    this.load(this.app, this.prisma)
    this.app.listen(config.PORT, () => {
      successfully(`Started up on port: ${config.PORT}`)
    })
  }
}

module.exports = Server
