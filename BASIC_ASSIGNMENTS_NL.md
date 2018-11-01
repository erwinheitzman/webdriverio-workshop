# Add the latest browser drivers to your WebdriverIO config
  Gebruik de [documentatie](http://webdriver.io/guide/services/selenium-standalone.html#seleniumArgs) wanneer nodig

  Ga naar de `e2e-wdio-mocha` directory

  Open de file genaamd `wdio.conf.js`

  Zoek naar comments met de volgende text `TODO -selenium and drivers config`

  Zoek de laatste driver versies op m.b.v. de links die in de comments staan en voeg ze toe aan het bijbehorende object

  Voeg het selenium config object aan je config toe door de properties `seleniumInstallArgs` en `seleniumArgs` toe te voegen en deze naar het object te laten verwijzen

# Create page object models, components and run tests
  Gebruik de [documentatie](http://webdriver.io/guide/testrunner/pageobjects.html) wanneer nodig

  Ga naar de `e2e-wdio-jasmine` directory

  Maak een page object genaamd `Page` `[page.js]`
  
    1. Voeg een methode genaamd `navigateTo` toe en laat deze naar een specifiek pad navigeren welke als argument/parameter word mee gegeven

  Maak een page object genaamd `TipsAndTricksPage` voor de tips-and-tricks pagina `[tips-and-tricks.js]` in de  `./e2e-wdio-jasmine/test/pages` directory

    1. importeer de main page class
    2. extend de main page class met de nieuwe class
    3. implementeer de onderstaande methodes
        getCardByTitle - haal een specifiek Angular card element op d.m.v. een title
        getCards - haal alle Angular card elements op van de pagina
        navigateTo - navigeer naar de tips-and-tricks pagina (tip: vergeet niet het `super` keyword hier te gebruiken)

  Maak een Card en Search component en voeg ze toe aan de page objects die je net hebt gemaakt

    title
      1. voeg een getter genaamd `title` toe
      2. haal het title element op met deze selector `.mat-card-title`

    subTitle
      1. voeg een getter genaamd `subTitle` toe
      2. haal het subTitle element op met deze selector `.mat-card-subtitle`

    content
      1. voeg een getter genaamd `content` toe
      2. haal het content element op met deze selector `.mat-card-content`

    search
      bar
        1. voeg een getter genaamd `bar` toe
        2. haal het search bar element op met deze selector `#searchbar`

  Voeg de Card component toe aan het tips-and-tricks page object

    1. importeer de Card component in de tips-and-tricks page object
    2. voeg een constructor toe
    3. voeg `this.card` toe aan de constructor en assign een nieuwe instance van de Card component class

  Add the search component to the tips-and-tricks page

    1. importeer de Search component in de tips-and-tricks page object
    2. voeg een constructor toe
    3. voeg `this.search` toe aan de constructor en assign een nieuwe instance van de Search component class

  Run de tests door `npm test` uit te voeren

# Schrijf een test

  Open de file genaamd `e2e-wdio-mocha/test/specs/drag-and-drop.js`

  Voeg een `before` hook toe aan het `describe` block

  Voeg het volgende toe aan de `before` hook:
  
  ```
  browser.url('https://marcojakob.github.io/dart-dnd/basic/');
  ```

  Gebruik het `dragAndDrop` command om de documenten op de pagina in de trashbin te slepen

  Hiervoor kun je de volgende selectors toepassen
    De documenten kunnen worden opgehaald met `.document`
    De trashbin kan worden opgehaald met `.trash`

  Valideer dat de lengte van het aantal aanwezige documenten elke keer met 1 afneemt, elke keer dat je een document in de trashbin plaatst

  Valideer aan het einde dat er geen documenten meer aanwezig zijn

  Valideer dat de trashbin gevuld is door te kijken of deze de classname `full` bevat

# Create suites

  Gebruik de [documentatie](http://webdriver.io/guide/testrunner/organizesuite.html#Group-Test-Specs) wanneer nodig

  Voeg een suite genaamd `basic` toe aan de config

  Voeg een suite genaamd `advanced` toe aan de config

  Run alleen de basic tests door de `--suite` flag te gebruiken

# Run in the cloud

  Gebruik de [documentatie](http://webdriver.io/guide/testrunner/organizesuite.html#Group-Test-Specs) wanneer nodig

  Het is een best practice om geen sensitive data in je code te plaatsen, in plaats daarvan kun je environment variables gebruiken die op je locale machine worden opgeslagen.

  De te gebruiken user is `webdriverio-workshop-user`
  De te gebruiken key is `webdriverio-rulez`

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

  Open de file genaamd `wdio.conf.js`

  Voeg een property genaamd `user` toe, net onder de regel waar de `exports.config` begint en gebruik  `process.env.SAUCE_USERNAME` als waarde\
  Voeg een property genaamd `key` toe, net onder de regel waar de `exports.config` begint en gebruik  `process.env.SAUCE_ACCESS_KEY` als waarde

  Run de tests door `npm test` uit te voeren

# BONUS: Vind de bug

  Open de file genaamd `e2e-wdio-mocha/test/specs/tips-and-tricks.js`

  Ga naar de test genaamd `should assert all text content of the cards`

  Deze test valideert de tekst content van de geladen card elementen. De tekst van deze cards zou overal het zelfde moeten zijn echter lijkt er een bugje in de content te zitten.

  Weet jij de bug te vinden? Vul hier onder het antwoord in!

  De bug is: 
