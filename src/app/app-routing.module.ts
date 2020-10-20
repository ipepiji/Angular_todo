import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent as AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardComponent as CustomerDashboardComponent } from './customer/dashboard/dashboard.component';
import { BookingComponent } from './customer/booking/booking.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DefaultNavMenuComponent } from './nav-menu/default-nav-menu/default-nav-menu.component';
import { CustomerNavMenuComponent } from './nav-menu/customer-nav-menu/customer-nav-menu.component';
import { PageUnauthorizedComponent } from './page-unauthorized/page-unauthorized.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
  {
    path: 'admin', canActivate: [AuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: () => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  },
  {
    path: 'customer', canActivate: [AuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: () => import('./customer/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'booking', loadChildren: () => import('./customer/booking/booking.module').then(m => m.BookingModule) },
      { path: 'profile', loadChildren: () => import('./customer/profile/profile.module').then(m => m.ProfileModule) },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'page-unauthorized', loadChildren: () => import('./page-unauthorized/page-unauthorized.module').then(m => m.PageUnauthorizedModule) },
  {
    path: '**', redirectTo: 'page-not-found', pathMatch: 'full'
  },
  { path: 'page-not-found', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  LoginComponent,
  RegisterComponent,
  AboutUsComponent,
  AdminDashboardComponent,
  CustomerDashboardComponent, BookingComponent, ProfileComponent,
  PageUnauthorizedComponent,
  PageNotFoundComponent,
  NavMenuComponent,
  DefaultNavMenuComponent,
  CustomerNavMenuComponent
] 