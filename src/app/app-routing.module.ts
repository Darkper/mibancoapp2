import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountListComponent} from "./customer-management/account-list/account-list.component";
import {CustomerHomeComponent} from "./customer-management/customer-home/customer-home.component";

const routes: Routes = [
  { path: '', redirectTo: '/customer-home', pathMatch: 'full' },
  { path: 'customer-home', component: CustomerHomeComponent },
  { path: 'accounts', component: AccountListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
