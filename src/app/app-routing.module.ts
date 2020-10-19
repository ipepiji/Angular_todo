import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent as AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardComponent as CustomerDashboardComponent } from './customer/dashboard/dashboard.component';
import { PageUnauthorizedComponent } from './page-unauthorized/page-unauthorized.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'admin', canActivate: [AuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: AdminDashboardComponent },
    ]
  },
  {
    path: 'customer', canActivate: [AuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: CustomerDashboardComponent },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'unauthorized', component: PageUnauthorizedComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [LoginComponent, RegisterComponent, AboutUsComponent, AdminDashboardComponent, CustomerDashboardComponent, PageNotFoundComponent] 