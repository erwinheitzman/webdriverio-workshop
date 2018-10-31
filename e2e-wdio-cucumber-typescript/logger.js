const { mkdirSync, writeFileSync, existsSync, statSync } = require('fs');
const { sep } = require('path');
const { Client } = require('webdriverio');

exports.createBrowserLogs = (testName) => {
  if (browser.desiredCapabilities.browserName === 'chrome') {
    const blacklist = [
      'chrome-extension'
    ];

    const isSevere = e => e.level === 'SEVERE';
    const isBlacklisted = e => blacklist.every(item => e.message.match(item));

    const filteredEntries = browser
      .log('browser')
      .value
      .filter(entry => isSevere(entry) && !isBlacklisted(entry));

    if (filteredEntries.length) {
      const path = 'browser_logs';

      if (!existsSync(path) || !statSync(path).isDirectory()) {
        mkdirSync(path);
      }

      writeFileSync(path + '/' + testName, JSON.stringify(filteredEntries, null, 4), 'utf8');
    }
  }
};
