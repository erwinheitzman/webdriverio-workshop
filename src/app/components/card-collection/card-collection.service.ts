import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../card';
import { CARDS } from './card-collection';

@Injectable({
  providedIn: 'root'
})
export class CardCollectionService {
  filteredCardCollection$: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>(CARDS);

  filter(value) {
    const sortByMatch = card => {
      const lcValue = value.toLowerCase();
      const lcTitle = card.title.toLowerCase();
      return (lcValue.includes(lcTitle) || lcTitle.includes(lcValue));
    };

    // random timeout for testing purpose
    const timeout = Math.floor(Math.random() * Math.floor(5) * 1000);

    if (!value.length) {
      setTimeout(() => this.filteredCardCollection$.next(CARDS), timeout);
    } else if (value.length > 2) {
      setTimeout(() => this.filteredCardCollection$.next(CARDS.filter(sortByMatch)), timeout);
    }
  }

  get collection(): BehaviorSubject<Card[]> {
    return this.filteredCardCollection$;
  }

}
