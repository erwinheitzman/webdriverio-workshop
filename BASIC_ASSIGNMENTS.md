Create a page object for each page
  Create a page object called `Page` `[page.js]`
    1. Add a method called `navigateTo` and make it navigate to a specific path which is passed in as an argument

  Create a page object called `AboutMePage` for the about-me page `[about-me.js]`
    1. import the main page class
    2. extend the main page class with the new class
    3. implement the following methods
      name - get name input element
      date - get date input element
      email - get email input element
      attribute - get attribute select element
      selectedAttribute - get the selected value from the attribute element
      dropdown - get the general dropdown element for Angular select elements
      message - get message textarea element
      submit - get submit button element
      navigateTo - use the navigateTo method from the main page class to navigate to the about-me page
      selectByVisibleText - create custom method for Angular select elements

  Create a page object called `TipsAndTricksPage`for the tips-and-tricks page `[tips-and-tricks.js]`
    1. import the main page class
    2. extend the main page class with the new class
    3. implement the following methods
        getCardByTitle - get a specific Angular card element by title
        getCards - get all the Angular card elements on the page
        navigateTo - navigate to the tips-and-tricks page

Create a dialog, card and search component and add them to the page objects you've just created
  card component
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

  dialog
    container
      1. add a getter called `container`
      2. retrieve the container element using the following selector `mat-dialog-container`

    close
      1. add a getter called `close`
      2. retrieve the close element using the following selector `mat-dialog-actions button.mat-button`

    content
      1. add a getter called `content`
      2. retrieve the content element using the following selector `mat-dialog-content`

    title
      1. add a getter called `title`
      2. retrieve the title element using the following selector `h1.mat-dialog-title`

  Add the components to the page objects where they are used
    add the dialog component to the about-me page
      1. import the dialog component into the about-me page
      2. create a constructor
      3. add this.dialog to the constructor and assign a new instance of the dialog component class

    add the card component to the tips-and-tricks page
      1. import the card component into the tips-and-tricks page
      2. create a constructor
      3. add this.card to the constructor and assign a new instance of the card component class

    add the search component to the tips-and-tricks page
      1. import the search component into the tips-and-tricks page
      2. create a constructor
      3. add `this.search` to the constructor and assign a new instance of the search component class

Create tests for all the predefined describe/it blocks in `e2e-wdio-mocha/basic`

Create tests for the tips-and-tricks page in the `tips-and-tricks.js` file
  1. in the beforeEach, call the navigateTo method and waitFor the first card title to be visible
  
  should get the classes from the card title element
    add

Create two suites, one called `basic` and one called `advanced`
  Run only the basic tests using the `--suite` flag
