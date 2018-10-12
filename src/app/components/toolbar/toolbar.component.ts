import { Component, Input } from '@angular/core';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private toolbarService: ToolbarService) { }

  @Input() title;

  toggleTheme(event) {
    this.toolbarService.toggleDarkTheme(event.checked);
  }

}
