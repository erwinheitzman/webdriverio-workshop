const Page = require('./page');
const Card = require('../components/card.component');
const Search = require('../components/search.component');

module.exports = class TipsAndTricksPage extends Page {
  constructor() {
    super();
    this.card = new Card();
    this.search = new Search();
  }

  getCardByTitle(title) {
    const elem = $(`.mat-card-title=${title}`);
    elem.waitForExist();
    return elem.$('..').$('..').$('..');
  }

  getCards() {
    return $$('mat-card');
  }

  navigateTo() {
    super.navigateTo('tips-and-tricks');
  }
}
