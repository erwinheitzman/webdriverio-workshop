'use strict'
const webdriverio = require('webdriverio');
const requireDir = require('require-dir');
const specs = requireDir('./specs/');
const options = require('../wdio.conf');

// connections.forEach(connection => {
  describe('ssdf', () => {
    console.log('TEST!!!');
    /** runs WebDriver */
    before(() => global.browser = webdriverio.remote(options).init())

    /** execute each test within 'e2e' dir */
    for (const key in specs) specs[key]()

    /** ends the session */
    after(() => browser.end())
  })
// })

/** generate description from capabilities */
// function desc (connection) {
//   const c = connection.desiredCapabilities
//   return [c.browserName].concat(c.version || [], c.platform || []).join(' - ')
// }
