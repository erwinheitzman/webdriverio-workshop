import { Page } from './page';
import { Card } from '../components/card.component';
import { searchBar } from '../components/search-bar.component';

export class TipsAndTricksPage extends Page {
  card;
  searchBar;

  constructor() {
    super();
    this.card = new Card();
    this.searchBar = searchBar();
  }
}
