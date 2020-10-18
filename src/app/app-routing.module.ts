import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent as AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardComponent as CustomerDashboardComponent } from './customer/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'dashboard', component: AdminDashboardComponent }
    ]
  },
  {
    path: 'customer', children: [
      { path: 'dashboard', component: CustomerDashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AdminDashboardComponent, CustomerDashboardComponent] 