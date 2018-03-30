import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule, PreloadAllModules } from '@angular/router';


import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { JokesComponent } from './jokes/jokes.component';

import { appRoutes } from './app.routes';
// import { UserInfoComponent } from './shared/user-info/user-info.component';

import { SharedModule } from './shared/shared.module';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
