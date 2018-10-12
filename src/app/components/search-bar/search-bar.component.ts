import { Component } from '@angular/core';
import { CardCollectionService } from '../card-collection/card-collection.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private cardCollectionService: CardCollectionService) { }

  onKey(value: string) {
    this.cardCollectionService.filter(value);
  }

}
