const Module = require('../packages/module/module')
const express = require('express')

const AppRoutes = require('../routes')

class RouterModule extends Module {
  constructor() {
    super('router-module')
  }
  /**
   * @param {express.Express} app
   */
  register(app) {
    for (const route of AppRoutes) {
      app.use(route.path, route.router)
    }
  }
}

module.exports = RouterModule
