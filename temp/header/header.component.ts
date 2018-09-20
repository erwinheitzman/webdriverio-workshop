import { Component, OnInit, Input } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() navigationComponent: NavigationComponent;

  constructor() { }

  ngOnInit() {
  }

}
