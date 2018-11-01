const fs = require('fs');

// TODO: import createBrowserLogs from ./logger
// const { createBrowserLogs } = require('./logger');

const debug = process.env.DEBUG;

const seleniumOptions = {
  drivers: {
    chrome: {
      version: '2.43'
    },
    firefox: {
      version: '0.23.0'
    }
  }
};

function removeDirSync(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(file => {
      const currentPath = `${path}/${file}`;
      if (fs.lstatSync(currentPath).isDirectory()) {
        removeDirSync(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
    fs.rmdirSync(path);
  }
}

exports.config = {
  debug: true,
  execArgv: debug ? [/* TODO - debug IDE: add --inspect-brk argument in order to debug from IDE */] : [],

  seleniumInstallArgs: seleniumOptions,
  seleniumArgs: seleniumOptions,

  specs: [
    './features/**/*.feature'
  ],

  // TODO - debug: change maxInstances to 1 if in debug mode
  maxInstances: 20,

  // TODO - debug: change capabilities to only run basic Chrome and nothing more if in debug mode
  capabilities: [{
      maxInstances: 5,
      browserName: 'chrome'
    },
    {
      maxInstances: 5,
      browserName: 'firefox'
    },
    // Add a custom browser
    // TODO: add Chrome Canary
  ],
  sync: true,
  logLevel: 'silent', // silent | verbose | command | data | result | error
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost:4200/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'cucumber',
  reporters: ['dot'],

  cucumberOpts: {
    compiler: [/* add TypeScript */],
    require: [/* add TypeScript output */], // <string[]> (file/dir) require files before executing features
    backtrace: false, // <boolean> show full backtrace for errors
    compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: false, // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: true, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: false, // <boolean> fail if there are any undefined or pending steps
    tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression

    // TODO - debug: change timeout to (24 * 60 * 60 * 1000) or another high number if in debug mode
    timeout: 20000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
  },

  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: function (config, capabilities) {
    removeDirSync('browser_logs');
    removeDirSync(config.screenshotPath);
  },

  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  // },

  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // before: function (capabilities, specs) {
  // },

  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },

  /**
   * Runs before a Cucumber feature
   * @param {Object} feature feature details
   */
  // beforeFeature: function (feature) {
  // },

  /**
   * Runs before a Cucumber scenario
   * @param {Object} scenario scenario details
   */
  // beforeScenario: function (scenario) {
  // },

  /**
   * Runs before a Cucumber step
   * @param {Object} step step details
   */
  // beforeStep: function (step) {
  // },

  /**
   * Runs after a Cucumber step
   * @param {Object} stepResult step result
   */
  // afterStep: function (stepResult) {
  // },

  /**
   * Runs after a Cucumber scenario
   * @param {Object} scenario scenario details
   */
  afterScenario: function (scenario) {
    const name = scenario.name.toLowerCase().replace(/\s+/g, '_');
    
    // Add a logger that logs console errors
    // TODO: add createBrowserLogs(name) here
  },

  /**
   * Runs after a Cucumber feature
   * @param {Object} feature feature details
   */
  // afterFeature: function (feature) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },

  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },

  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },

  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onComplete: function (exitCode, config, capabilities) {
  // }
}
