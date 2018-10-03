import { Component, OnInit } from '@angular/core';

import { CardComponent } from '../card/card.component';

// interface CardCollection {
//   list: {subject: string}[];
// }

export class CardCollectionListComponent {
  list = [
    { subject: 'dog' },
    { subject: 'cat' },
    { subject: 'dog' }
    // new CardComponent('dog'),
    // new CardComponent('cat'),
    // new CardComponent('dog')
  ];
}

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})
export class CardCollectionComponent implements OnInit {
  collection = new CardCollectionListComponent().list;

  constructor() { }

  ngOnInit() {
  }

}
