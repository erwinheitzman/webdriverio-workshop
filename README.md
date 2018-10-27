# WebdriverIO workshop

This project was created with the purpose of teaching people how to use WebdriverIO.

There are four setups ready to be used but they are mainly there for reference, here's a small overview of what each setup showcases:\

`e2e-wdio-cucumber-typescript` - cucumber with typescript and a easy to use debugging setup (both normal and though vscode)\
`e2e-wdio-jasmine` - a simple setup that showcases the use of jasmine\
`e2e-wdio-mocha` - mocha with some assignments that teach you the basics of WebdriverIO\
`e2e-wdio-standalone` - showcases the use of webdriverio without the testrunner, should only be used for things other then e2e testing, for example things like webscraping\

## Development server

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

First start a dev server to test against and make sure you have a working internet connection for tests that do not use the example site.
Change your directory to one of the setups that have already been created for you called either `e2e-wdio-cucumber-typescript|e2e-wdio-jasmine|e2e-wdio-mocha`.
Run `npm test` to execute the end-to-end tests via [WebdriverIO](http://www.webdriver.io/).

## Running end-to-end tests in the cloud

A temporary Saucelabs account has been created for the puporse of this workshop. The account details will be shared during the workshop. When you have the credentials, it's a best practice to add these using environment variables.
However you don't want to enter this information each time you start your terminal.
To prevent this you can create a configuration on OS X/Linux and Windows.

#### OS X/Linux
NOTE: the actions below can also be completed using different editors, and example on how to do the same with vscode would be ```code ~/.bash_profile``` which is a lot easier.

Start a terminal and enter the following ```vi ~/.bash_profile```, then press Enter.\
Press `i` to insert text into your profile file.\
Enter these lines:\
```export SAUCE_USERNAME="your Sauce username"```\
```export SAUCE_ACCESS_KEY="your sauce access key"```\
Press Escape.\
Hold `Shift` and press `Z` twice (`z z`) to save your file and quit vi.\

### Windows
Click Start on the task bar.\
For Search programs and fields, enter `Environment Variables`.\
Click Edit the environment variables. \
This will open the System Properties dialog.\
Click Environment Variables. \
This will open the Environment Variables dialog.\
In the System variables section, click New.\
This will open the New System Variable dialog.\
For Variable name, enter `SAUCE_USERNAME`.\
For Variable value, enter your Sauce username.\
Click OK.\
Repeat 4 - 8 to set up the `SAUCE_ACCESS_KEY`.\

### wdio config

When you have done the above, you can add the following in your wdio.conf.js file and you are good to go:\

```user: process.env.SAUCE_USERNAME,```\
```key: process.env.SAUCE_ACCESS_KEY,```\

## Further help

To get more information checkout one of following link or contact me directly.
