import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
//内联型 模板和样式 指令： ng g c name --inline-template --inline-style
//内联型 模板和样式 指令： ng g c name -it -is
@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h3 md-dialog-title>{{title}}</h3>
    <div md-dialog-content>
      {{content}}
    </div>
    <div md-dialog-actions>
      <button type="button" md-raised-button color="primary" (click)="onClick(true)">确定</button>
      <button type="button" md-dialog-close md-button (click)="onClick(false)">取消</button>
    </div>
  `,
  styles: [`

  `]
})
export class ConfirmDialogComponent implements OnInit {
  title = "";
  content = "";
  constructor(private dialogRef: MdDialogRef<ConfirmDialogComponent>, @Inject(MD_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content
  }

  onClick(result: boolean) {
    this.dialogRef.close(result);
  }
}
