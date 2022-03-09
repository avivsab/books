import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import {LoginLibraryGuard} from './guards/login-library.guard';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule),
    canActivate: [LoginLibraryGuard],
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./modules/wishlist/wishlist.module').then(m => m.WishlistModule),
    canActivate: [LoginLibraryGuard],
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
