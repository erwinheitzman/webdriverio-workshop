const Page = require('./page');
const Card = require('../components/card.component');
const Search = require('../components/search-bar.component');

module.exports = class TipsAndTricksPage extends Page {
  constructor() {
    super();
    this.card = new Card();
    this.search = new Search();
  }

  navigateTo() {
    super.navigateTo('tips-and-tricks');
  }
}
