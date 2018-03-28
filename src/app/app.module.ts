import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  // 放置组件（component），管道（pipe）
  declarations: [
    AppComponent,
    UserListComponent
  ],
  // 放置模块（module）
  imports: [
    BrowserModule
  ],
  // 放置服务（service）
  providers: [],
  // 放置动态组件
  entryComponents: [
    UserListComponent
  ],
  // 启动项
  bootstrap: [AppComponent]
})
export class AppModule { }
