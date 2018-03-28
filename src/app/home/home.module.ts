import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [
    HomeComponent
  ],
  exports: [ RouterModule ],
})
export class HomeModule { }
