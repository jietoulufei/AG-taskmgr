import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
//MD_DIALOG_DATA 用于接受this.dialog.open(NewProjectComponent,{data:"this is my data sent"}) dailog的传值
//MdDialogRef 用于输出属性
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) private data, private dialogRef: MdDialogRef<NewProjectComponent>) { }

  ngOnInit() {
    console.log(JSON.stringify(this.data))
  }

  onClick(){
    this.dialogRef.close("我接收到数据了")
  }
}
