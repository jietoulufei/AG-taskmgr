import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
//MD_DIALOG_DATA 用于接受this.dialog.open(NewProjectComponent,{data:"this is my data sent"}) dailog的传值
//MdDialogRef 用于输出属性
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush //告诉angular 无需检测我 当外部输入属性发送过来 发送变化的时候再检测 可以提升性能
})//changeDetection: ChangeDetectionStrategy.Default //默认 自动检测所有树(所有event timer xhr 异步事件会触发检测)
export class NewProjectComponent implements OnInit {
  title = "";
  constructor(@Inject(MD_DIALOG_DATA) private data, private dialogRef: MdDialogRef<NewProjectComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
    console.log(JSON.stringify(this.data))
  }

  onClick() {
    this.dialogRef.close("我接收到数据了")
  }
}
