import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { cardAnim } from 'app/anims/card.amin';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [cardAnim],
  changeDetection: ChangeDetectionStrategy.OnPush //告诉angular 无需检测我 当外部输入属性发送过来 发送变化的时候再检测
})//changeDetection: ChangeDetectionStrategy.Default //默认 自动检测所有树(所有event timer xhr 异步事件会触发检测)
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDel = new EventEmitter<void>();
  /**
   *  @HostBinding()可以为指令的宿主元素添加类、样式、属性等，而@HostListener()可以监听宿主元素上的事件。
   *  @HostBinding 表示 把 变量cardState 绑定到 属性 @card 上
   *  @HostListener 表示 把 变量函数onMouseEnter 绑定到 事件 mouseenter 上
   *  相当于html写法 [@card] = 'cardState
   */
  @HostBinding('@card') cardState = 'out';
  @HostListener('mouseenter', ['$event.target']) onMouseEnter(target) {
    this.cardState = 'hover';
  };
  @HostListener('mouseleave', ['$event.target']) onMouseLeave(target) {
    this.cardState = 'out';
  };

  constructor() { }

  ngOnInit() {
  }

  onInviteClick() {
    this.onInvite.emit();
  }

  onEditClick() {
    this.onEdit.emit();
  }

  onDelClick() {
    this.onDel.emit();
  }
}
