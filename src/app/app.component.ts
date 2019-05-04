import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  darkTheme: boolean = false;
  switchTheme(dark) {
    //alert(dark.checked);
    //console.log("dart", dark)
    this.darkTheme = dark.checked;
  }
}
