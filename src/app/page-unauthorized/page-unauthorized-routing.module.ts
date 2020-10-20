import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageUnauthorizedComponent } from './page-unauthorized.component';

const routes: Routes = [
  { path: "", component: PageUnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageUnauthorizedRoutingModule { }
