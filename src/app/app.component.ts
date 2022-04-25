import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

  ]
})
export class AppComponent {
  title = 'Silvestre Galvan';
  darkTheme = false;

  constructor(public translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('en');
  }

  toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
    this.darkTheme = !this.darkTheme;
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  animatedIcon() {
    document.body.classList.toggle('dark-theme');
  }
}
