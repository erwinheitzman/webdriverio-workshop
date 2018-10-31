const Page = require('./page');
const Dialog = require('../components/dialog.component');

// create private method without the use of TypeScript
function customSelectByVisibleText(text) {
  // click the select so that the options are loaded into the DOM
  this.attribute.click();

  // wait for the dropdown to be loaded and visible so we can click it
  this.dropdown.waitForVisible();

  // click the option
  $(`span=${text}`).click();

  // if you remove this the dropdown is still visible when submitting the form
  this.dropdown.waitForVisible(null, true);
}

module.exports = class TipsAndTricksPage extends Page {
  constructor() {
    super();

    // bind the method to the this scope so that it retains private but can still be used inside the class
    this.customSelectByVisibleText = customSelectByVisibleText.bind(this);

    this.dialog = new Dialog();
  }

  get name()              { return $('input[placeholder="Name"]'); }
  get date()              { return $('input[placeholder="Date"]'); }
  get email()             { return $('input[placeholder="Email"]'); }
  get attribute()         { return $('mat-select[placeholder="Attribute"]'); }
  get selectedAttribute() { return $('mat-select[placeholder="Attribute"] .mat-select-value-text span'); }
  get dropdown()          { return $('.cdk-overlay-container'); }
  get message()           { return $('textarea[placeholder="Leave a message"]'); }
  get submit()            { return $('button[type="submit"]'); }

  navigateTo() {
    super.navigateTo('about-me');
  }

  selectByVisibleText(text) {
    this.customSelectByVisibleText(text);
  }
}
