import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DynChildComponent } from './dyn-child/dyn-child.component';


@NgModule({
  declarations: [
    AppComponent,
    DynChildComponent
  ],
  imports: [
    BrowserModule
  ],
  // 动态组件导入
  entryComponents: [
    DynChildComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
