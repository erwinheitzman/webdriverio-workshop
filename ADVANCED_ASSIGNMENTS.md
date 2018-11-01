# Preperation

  Open your terminal

  Change to the `e2e-wdio-cucumber-typescript` directory

  Run `npm i` to install all the dependencies

# Add typescript

  Use the [documentation](http://webdriver.io/guide/getstarted/configuration.html#Setup-TypeScript) if needed

  Run `npm i` to install all the dependencies

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

Create a method that creates files containing the console output
  Add it to the afterTest hook

Create a method that waits for an alert to exist and dissapear
  Write tests to prove this works

Add proper debugging settings to your config

Add settings to debug from your IDE (vscode)

Use grep to run a single file


