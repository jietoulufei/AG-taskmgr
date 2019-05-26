import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { itemAnim } from 'app/anims/item.amin';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [itemAnim]
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();
  widerProority = 'in';
  
  constructor() { }
  

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : "unassigned";
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();
  };

  @HostListener('mouseenter', ['$event.target']) onMouseEnter(target) {
    this.widerProority = 'out';
  };
  @HostListener('mouseleave', ['$event.target']) onMouseLeave(target) {
    this.widerProority = 'in';
  };
}
