import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { HeaderTitleService } from '../../services/header-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // title = 'Home';

  // @Output() change: EventEmitter<string> = new EventEmitter();

  // setTitle() {
  //   this.change.emit(this.title);
  // }

  ngOnInit() {
    // this.change.subscribe(title => {
    //   this.title = title;
    // });
  }

}
