# Preperation

  Open je terminal

  Ga naar de `e2e-wdio-cucumber-typescript` directory

  Run `npm i` om je dependencies te installeren

# Add typescript

  Gebruik de [documentatie](http://webdriver.io/guide/getstarted/configuration.html#Setup-TypeScript) wanneer nodig

  Run `npm i` om je dependencies te installeren

  Voeg TypeScript toe zoals in de documentatie word beschreven

  Run de tests door `npm test` uit te voeren

# Add mobile emulation

  Open de file genaamd `wdio.conf.js`

  Ga naar de capabilities

  Verander deze naar het onderstaande voorbeeld
  ```
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    chromeOptions: {
      mobileEmulation: { deviceName: 'Galaxy S5' },
    }
  }],
  ```

  Run de tests door `npm test` uit te voeren

# Add a custom browser

  Open your `wdio.conf.js` file

  Ga naar de capabilities

  Verander deze naar het onderstaande voorbeeld
  ```
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    chromeOptions: {
      binary: '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary'
    }
  }],
  ```

  Run de tests door `npm test` uit te voeren

# Create logger for logging console errors

  Gebruik de  [documentatie](http://webdriver.io/api/protocol/log.html) wanneer nodig

  Open de file genaamd `logger.js`

  Breidt de logger method out zodat deze werkt

  Run de tests door `npm test` uit te voeren

  Validate dat de `browser_logs` directory is aangemaakt

  Validate dat de `browser_logs` directory een aantal log files bevat

# Create a proper debugging setup

  Gebruik de  [documentatie](http://webdriver.io/api/utility/debug.html#Usage) wanneer nodig

  Open de file genaamd `wdio.conf.js`

  Zoek naar een comment met het volgende er in `TODO - debug` en update de properties zodat ze veranderen als de environment variable `DEBUG` true is

  Run the tests using `DEBUG=true npm test`

# Create a IDE debugging setup

  Gebruik de  [documentatie](http://webdriver.io/api/utility/debug.html#Usage) wanneer nodig

  Open de file genaamd `wdio.conf.js`

  Zoek naar een comment met het volgende er in `TODO - debug IDE` en update de properties zodat ze veranderen als de environment variable `DEBUG` true is

  De value in debug mode moet zijn `['--inspect-brk=127.0.0.1:5859']`

  De value in non-debug mode moet zijn `[]`

  Open een van de test-steps uit de `./e2e-wdio-cucumber-typescript/features/test-definitions` directory

  Zet een breakpoint bij een van de commands

  Run de tests door `DEBUG=true npm test` uit te voeren

# Create a method that can wait for an alert to appear or dissapear

  Note: De methode moet de volgende parameters bevatten:

      parameter       | type
      -------------------------
      timeout         | integer
      message         | string
      invertCondition | boolean

  Voor deze opdracht switch je naar de `e2e-wdio-mocha` directory

  Run `npm i` om je dependencies te installeren wanneer nodig

  Open de `e2e-wdio-mocha/test/specs/advanced` directory

  Open de file genaamd `alerts.js`

  Probeer een methode the implementeren die op een alert kan wachten door de `waitUntil` en `alertText` commands te gebruiken

  Run de tests door `npm test` uit te voeren
