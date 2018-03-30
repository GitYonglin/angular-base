import { Routes, RouterModule } from '@angular/router';

import { JokesComponent } from './jokes.component';
import { JokeGuard } from './joke-guard';
export const routes: Routes = [
  {
    path: '',
    component: JokesComponent,
    canDeactivate: [JokeGuard] // 是否允许跳转
  }
];
