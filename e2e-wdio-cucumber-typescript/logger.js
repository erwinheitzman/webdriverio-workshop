const { mkdirSync, writeFileSync, existsSync, statSync } = require('fs');

exports.createBrowserLogs = (testName) => {
  if (browser.desiredCapabilities.browserName === 'chrome') {
    const entries; // TODO: add implementation to retrieve logs from console

    // if results
    if (entries.length) {
      const path = 'browser_logs';

      // create the browser_logs directory if it ain't existing
      if (!existsSync(path) || !statSync(path).isDirectory()) {
        mkdirSync(path);
      }

      // write logs to file
      writeFileSync(path + '/' + testName, JSON.stringify(entries, null, 4), 'utf8');
    }
  }
};
