import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'app/shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from 'app/anims/router.amin';
import { listAnimation } from 'app/anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush //告诉angular 无需检测我 当外部输入属性发送过来 发送变化的时候再检测
})//changeDetection: ChangeDetectionStrategy.Default //默认 自动检测所有树(所有event timer xhr 异步事件会触发检测)
export class ProjectListComponent implements OnInit {
  @HostBinding('@routeAnim') state: any;
  projects = [
    {
      "id": 1,
      "name": "企业协作平台",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "id": 2,
      "name": "自动化测试项目",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/1.jpg"
    },
  ]
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    //this.dialog.open(NewProjectComponent,{width:"100px",height:"100px"})
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: "新增项目" } });
    dialogRef.afterClosed().subscribe(result => {
      this.projects = [...this.projects, {
        "id": 3,
        "name": "这是一个新项目",
        "desc": "这是一个企业内部项目",
        "coverImg": "assets/img/covers/1.jpg"
      }]
      console.log(result)
    })
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  };

  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: "编辑项目" } });
  }

  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: "删除项目", content: '您确认删除该项目吗？' } });
    dialogRef.afterClosed().subscribe(result => {
      this.projects = this.projects.filter(p => {
        return p.id != project.id   //删除过滤
      });
    })
  }
}
