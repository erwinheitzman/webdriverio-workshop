# Preperation

  Start de app

  Open een terminal window

  In de root folder run `npm i` om je dependencies te installeren

  Run `npm start` vanuit je terminal om de app te starten op poort 4200

# Add the latest browser drivers to your WebdriverIO config
  Gebruik de [documentatie](http://webdriver.io/guide/services/selenium-standalone.html#seleniumArgs) wanneer nodig

  Open another terminal window and change directory to `e2e-wdio-mocha`

  Run `npm i` om je dependencies te installeren

  Open de file genaamd `wdio.conf.js`

  Zoek naar comments met de volgende text `TODO -selenium and drivers config`

  Zoek de laatste driver versies op m.b.v. de links die in de comments staan en voeg ze toe aan het bijbehorende object

  Voeg het selenium config object aan je config toe door de properties `seleniumInstallArgs` en `seleniumArgs` toe te voegen en deze naar het object te laten verwijzen

# Create page object models, components and run tests
  Gebruik de [documentatie](http://webdriver.io/guide/testrunner/pageobjects.html) wanneer nodig

  Open nog een terminal window en ga naar de `e2e-wdio-jasmine` directory

  Run `npm i` from your terminal in order to install the required packages

  Create a page object called `Page` `[page.js]`
  
    1. Add a method called `navigateTo` and make it navigate to a specific path which is passed in as an argument

  Create a page object called `TipsAndTricksPage`for the tips-and-tricks page `[tips-and-tricks.js]` in the following location `./e2e-wdio-jasmine/test/pages`

    1. import the main page class
    2. extend the main page class with the new class
    3. implement the following methods
        getCardByTitle - get a specific Angular card element by title
        getCards - get all the Angular card elements on the page
        navigateTo - navigate to the tips-and-tricks page (tip: do not forget to use the `super` keyword here)

  Create a card and search component and add them to the page objects you've just created

    title
      1. add a getter called `title`
      2. retrieve the title element using the following selector `.mat-card-title`

    subTitle
      1. add a getter called `subTitle`
      2. retieve the subTitle element using the following selector `.mat-card-subtitle`

    content
      1. add a getter called `content`
      2. retrieve the content element using the following selector `.mat-card-content`

    search
      bar
        1. add a getter called `bar`
        2. retrieve the search bar element using the following selector `#searchbar`

  Add the card component to the tips-and-tricks page

    1. import the card component into the tips-and-tricks page
    2. create a constructor
    3. add this.card to the constructor and assign a new instance of the card component class

  Add the search component to the tips-and-tricks page

    1. import the search component into the tips-and-tricks page
    2. create a constructor
    3. add `this.search` to the constructor and assign a new instance of the search component class

  Run the tests that are predefined in the `e2e-wdio-jasmine` folder by running `npm test` from the terminal

# Create suites

  Gebruik de [documentatie](http://webdriver.io/guide/testrunner/organizesuite.html#Group-Test-Specs) wanneer nodig

  Add one suite called `basic`

  Add one suite called `advanced`

  Run only the basic tests using the `--suite` flag

# Run in the cloud

  Gebruik de [documentatie](http://webdriver.io/guide/testrunner/organizesuite.html#Group-Test-Specs) wanneer nodig

  It's a best practice to not put sensitive data in your code, instead use environment variables to be stored on your machine.

  ## Setting Environment Variables for Mac OS X/Linux
    In Terminal mode, enter vi ~/.bash_profile, and then press Enter.
    Press i to insert text into your profile file.
    Enter these lines:

    export SAUCE_USERNAME="your Sauce username"
    export SAUCE_ACCESS_KEY="your sauce access key"
    Press Escape.
    Hold Shift and press Z twice (z z) to save your file and quit vi.

    In the terminal, enter source ~/.bash_profile.

  ## Setting Environment Variables for Authentication Credentials on Windows
    Click Start on the task bar.
    For Search programs and fields, enter Environment Variables.
    Click Edit the environment variables. 
    This will open the System Properties dialog.
    Click Environment Variables. 
    This will open the Environment Variables dialog.
    In the System variables section, click New.
    This will open the New System Variable dialog.
    For Variable name, enter SAUCE_USERNAME.
    For Variable value, enter your Sauce username.
    Click OK.
    Repeat 4 - 8 to set up the SAUCE_ACCESS_KEY.

  Open your `wdio.conf.js` file

  Add a property called `user` the top, just below the exports.config part and add the following value `process.env.SAUCE_USERNAME`\
  Add a property called `key` the top, just below the exports.config part and add the following value `process.env.SAUCE_ACCESS_KEY`

  Run the tests using `npm test`
