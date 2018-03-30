import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule, PreloadAllModules } from '@angular/router';


import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { JokesComponent } from './jokes/jokes.component';

import { appRoutes } from './app.routes';
// import { UserInfoComponent } from './shared/user-info/user-info.component';

import { SharedModule } from './shared/shared.module';

import { RouterPreloadingStrategy } from './common/route-preloading-strategy';

@NgModule({
  declarations: [
    AppComponent,
    // 做异步模块不能引入组件
    // HomeComponent,
    // JokesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: RouterPreloadingStrategy})
    // RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}) // 全部预加载
  ],
  providers: [
    RouterPreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
