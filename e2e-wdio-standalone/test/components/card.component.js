module.exports = class Card {
  get title() {
    return browser.element('.mat-card-title');
  }

  get subTitle() {
    return browser.element('.mat-card-subtitle');
  }

  get content() {
    return browser.element('.mat-card-content');
  }
}
