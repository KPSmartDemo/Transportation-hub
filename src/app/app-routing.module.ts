import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { LandingPage } from './pages/landing/landing.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./pages/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu-pages/menu/menu.module').then( m => m.MenuPageModule)
  },

  {
    path: 'trucks-link',
    loadChildren: () => import('./manage_links_truck_route/trucks-link/trucks-link.module').then( m => m.TrucksLinkPageModule)
  },
  {
    path: 'active-routes-link',
    loadChildren: () => import('./manage_links_truck_route/active-routes-link/active-routes-link.module').then( m => m.ActiveRoutesLinkPageModule)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
