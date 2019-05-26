import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ //square 为触发器的名字  green为样式的状态名字
  //   trigger('square', [
  //     state('green', style({ 'background-color': 'green', 'height': '100px', 'transform': 'translateY(-100%)' })),
  //     state('red', style({ 'background-color': 'red', 'height': '100px', 'transform': 'translateY(100%)' })),
  //     transition('green => red', animate('.8s cubic-bezier(.38,2.04,0,.62)')),//表示 0.2秒过渡时间 延迟1秒触发 
  //     // transition('red => green', animate('.8s ease-out')),
  //     transition('red => green',animate(1000,keyframes([
  //       style({transform:'translateY(0%)'}),
  //       style({transform:'translateY(-132.27%)'}),
  //       style({transform:'translateY(-86.88%)'}),
  //       style({transform:'translateY(-104.63%)'}),
  //       style({transform:'translateY(-98.36%)'}),
  //       style({transform:'translateY(-100.58%)'}),
  //       style({transform:'translateY(-99.8%)'}),
  //       style({transform:'translateY(-100%)'}),
  //     ]))),
  //   ])
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
