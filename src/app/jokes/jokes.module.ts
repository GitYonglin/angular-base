import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './jokes.routes';
import { JokesComponent } from './jokes.component';

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [
    JokesComponent
  ],
  exports: [ RouterModule ],
})
export class JokesModule { }
