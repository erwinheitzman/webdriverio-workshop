import { Component } from '@angular/core';
import { CardCollectionListComponent } from '../card-collection/card-collection.component';

const cardCollectionListComponent = new CardCollectionListComponent();

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  values = '';
  words = cardCollectionListComponent.list.map(obj => obj.subject);

  constructor() { }

  onKey(value: string) {
    if (this.words.includes(value)) {
      this.values = value;
    } else {
      this.values = '';
    }
  }

}
