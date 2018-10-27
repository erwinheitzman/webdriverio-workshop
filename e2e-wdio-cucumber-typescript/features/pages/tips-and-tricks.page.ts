import { Page } from './page';
import { Card } from '../components/card.component';
import { Search } from '../components/search-bar.component';

export class TipsAndTricksPage extends Page {
  card;
  search;

  constructor() {
    super();
    this.card = new Card();
    this.search = new Search();
  }

  navigateTo() {
    super.navigateTo('tips-and-tricks');
  }
}
