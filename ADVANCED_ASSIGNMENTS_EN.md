# Add typescript

  Use the [documentation](http://webdriver.io/guide/getstarted/configuration.html#Setup-TypeScript) if needed

  Implement TypeScript as shown in the documentation

  Run the tests using `npm test`

# Add mobile emulation

  Open your `wdio.conf.js` file

  Go to the capabilities

  Change it so it looks the code below
  ```
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    chromeOptions: {
      mobileEmulation: { deviceName: 'Galaxy S5' },
    }
  }],
  ```

  Run the tests using `npm test`

# Add a custom browser

  Open your `wdio.conf.js` file

  Go to the capabilities

  Change it so it looks the code below
  ```
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    chromeOptions: {
      binary: '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary'
    }
  }],
  ```

  Run the tests using `npm test`

# Create logger for logging console errors

  Use the [documentation](http://webdriver.io/api/protocol/log.html) if needed

  Open the file called `logger.js`

  Finish the implementation of the logger

  Run the tests using `npm test`

  Validate that the `browser_logs` directory is created

  Validate that the `browser_logs` directory contains a few log files

# Create a proper debugging setup

  Use the [documentation](http://webdriver.io/api/utility/debug.html#Usage) if needed

  Open the file called `wdio.conf.js`

  Look for the comments that contain a `TODO - debug` comment and update the properties to change when the environment variable `DEBUG` is set

  Run the tests using `DEBUG=true npm test`

# Create a IDE debugging setup

  Use the [documentation](http://webdriver.io/api/utility/debug.html#Usage) if needed

  Open the file called `wdio.conf.js`

  Look for the comments that contain a `TODO - debug IDE` comment and update the properties to change when the environment variable `DEBUG` is set

  The value to be used in debug mode should be `['--inspect-brk=127.0.0.1:5859']`

  The value to be used in non debug mode should be `[]`

  Open one of the test-steps found in `./e2e-wdio-cucumber-typescript/features/test-definitions`

  Set a breakpoint at one of the commands

  Run the tests using `DEBUG=true npm test`

# Create a method that can wait for an alert to appear or dissapear

  Note: The method should have the following parameters:

      parameter       | type
      -------------------------
      timeout         | integer
      message         | string
      invertCondition | boolean

  For this assignment switch to the `e2e-wdio-mocha` directory

  Open the `e2e-wdio-mocha/test/specs/advanced` directory

  Open the file called `alerts.js`

  Try to implement a method that can wait for an alert to appear or dissapear utilizing the `waitUntil` and `alertText` command

  Run the tests using `npm test`
