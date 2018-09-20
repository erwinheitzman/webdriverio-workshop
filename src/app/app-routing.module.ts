import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { TipsAndTricksComponent } from './components/tips-and-tricks/tips-and-tricks.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'tips-and-tricks', component: TipsAndTricksComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: AboutMeComponent }
];

const routerConfigObject = environment.production
  ? { enableTracing: true } // <-- debugging purposes only
  : {};

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      routerConfigObject
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
