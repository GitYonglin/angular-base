import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './jokes.routes';
import { JokesComponent } from './jokes.component';

import { SharedModule } from '../shared/shared.module';
import { JokeGuard } from './joke-guard';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    JokesComponent
  ],
  providers: [
    JokeGuard
  ],
  exports: [ RouterModule ],
})
export class JokesModule { }
