import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { trigger, state, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ //square 为触发器的名字  green为样式的状态名字
    trigger('square', [
      state('green', style({ 'background-color': 'green', 'height': '100px', 'transform': 'translateX(0)' })),
      state('red', style({ 'background-color': 'red', 'height': '50px', 'transform': 'translateX(100%)' })),
      transition('green => red', animate('.2s 1s')),//表示 0.2秒过渡时间 延迟1秒触发 
      transition('red => green', animate(1000)),
    ])
  ]
})
export class AppComponent {

  squareState: string;

  title = 'app';
  darkTheme: boolean = false;
  switchTheme(dark) {
    //alert(dark.checked);
    //console.log("dart", dark)
    this.darkTheme = dark.checked;
  }

  onClick() {
    this.squareState = this.squareState == 'red' ? 'green' : 'red';
  }
}
