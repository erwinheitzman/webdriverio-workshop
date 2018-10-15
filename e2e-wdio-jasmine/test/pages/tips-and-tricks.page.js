const Page = require('./page');
const Card = require('../components/card.component');
const searchBar = require('../components/search-bar.component');

module.exports = class TipsAndTricksPage extends Page {
  constructor() {
    super();
    this.card = new Card();
    this.searchBar = searchBar();
  }

  navigateTo() {
    super.navigateTo('tips-and-tricks');
  }
}
