import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'aboutus',
    loadComponent: () => import('./pages/aboutus/aboutus.page').then( m => m.AboutusPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.page').then( m => m.ProductsPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'contactus',
    loadComponent: () => import('./pages/contactus/contactus.page').then( m => m.ContactusPage)
  },
  // {
  //   path: 'side-menu',
  //   loadComponent: () => import('./pages/side-menu/side-menu.page').then( m => m.SideMenuPage)
  // },
];
