import { RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import { JokesComponent } from './jokes/jokes.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'home', // 重定向
    pathMatch: 'full'
  },
  {
    path: 'home', // 路径
    data: { preload: true},
    // component: HomeComponent // 同步加载
    loadChildren: './home/home.module#HomeModule' // 异步加载
  },
  {
    path: 'jokes',
    // component: JokesComponent
    data: { preload: false},
    loadChildren: './jokes/jokes.module#JokesModule'
  },
  {
    path: '**',
    // component: HomeComponent
    loadChildren: './home/home.module#HomeModule'
  }
];
