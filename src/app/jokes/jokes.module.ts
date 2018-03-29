import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './jokes.routes';
import { JokesComponent } from './jokes.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    JokesComponent
  ],
  exports: [ RouterModule ],
})
export class JokesModule { }
