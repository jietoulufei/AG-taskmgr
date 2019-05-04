import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: "待辦",
      tasks: [
        {
          id: 1,
          desc: '任務一：去星巴克買杯咖啡',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: "張三",
            avatar: "avatars:svg-11"
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任務二：完成老闆佈置的 ppt 作業',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: "李四",
            avatar: "avatars:svg-12"
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id: 2,
      name: "進行中",
      tasks: [
        {
          id: 1,
          desc: '任務三：項目代碼評審',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: "王五",
            avatar: "avatars:svg-13"
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任務四：制定項目計劃',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: "李四",
            avatar: "avatars:svg-12"
          },
          dueDate: new Date(),
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
