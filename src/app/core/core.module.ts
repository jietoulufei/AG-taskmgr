import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpModule } from '@angular/http';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from 'app/utils/svg.util';
import { SharedModule } from 'app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';//兼容移动端
import { AppRoutingModule } from 'app/app-routing.module';
@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule //动画模块建议放在最后！
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, AppRoutingModule],
  providers: [
    { provide: 'BASE_CONFIG', useValue: 'http://localhost:3000' },//默认取出的都是同一个对象实例
    { provide: 'demo', useValue: 'helloDemo' },
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    iconRegistry: MdIconRegistry, sanitizer: DomSanitizer
  ) {
    if (parent) {
      throw new Error("模块已经存在，不能再次加载！")
    }
    loadSvgResources(iconRegistry, sanitizer);
  }
}
