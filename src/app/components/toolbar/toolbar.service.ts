import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  isDarkThemeEnabled = false;
  renderer: Renderer2;

  constructor() { }

  toggleDarkTheme(toggle?) {
    if (toggle !== undefined) {
      this.isDarkThemeEnabled = toggle;
    }

    function toggleClasses(method) {
      this.renderer[method](document.querySelector('body'), 'dark-theme');
      Array.from(document.querySelectorAll('.card')).forEach(element => {
        this.renderer[method](element, 'dark-theme');
      });
      Array.from(document.querySelectorAll('mat-card-subtitle')).forEach(element => {
        this.renderer[method](element, 'dark-theme-yellow');
      });
      Array.from(document.querySelectorAll('mat-card-content')).forEach(element => {
        this.renderer[method](element, 'dark-theme-light-blue');
      });
    }

    if (this.isDarkThemeEnabled) {
      toggleClasses('addClass');
    } else {
      toggleClasses('removeClass');
    }
  }
}
