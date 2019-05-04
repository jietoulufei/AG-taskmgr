import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from 'app/shared/shared.module';
@NgModule({
  imports: [
    SharedModule, ProjectRoutingModule
  ],
  declarations: [ProjectListComponent, ProjectItemComponent, NewProjectComponent, InviteComponent],
  entryComponents: [NewProjectComponent, InviteComponent], //入口组件（entry component）是通过组件的类型动态加载 针对一开始隐藏的那些组件
})
export class ProjectModule { }
