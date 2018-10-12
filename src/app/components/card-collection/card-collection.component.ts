import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardCollectionService } from './card-collection.service';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})
export class CardCollectionComponent implements OnInit {
  cardCollection: Card[];

  constructor(private cardCollectionService: CardCollectionService) { }

  ngOnInit(): void {
    this.cardCollectionService.filteredCardCollection$.subscribe((cards: Card[]) => {
      if (cards) {
        this.cardCollection = cards;
      }
    });
  }

}
