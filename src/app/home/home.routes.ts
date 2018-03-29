import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '' , redirectTo: 'picture/10', pathMatch: 'full' },
      { path: 'picture/:page' , component: PictureComponent },
      { path: 'text' , component: TextComponent },
    ]
  }
];
