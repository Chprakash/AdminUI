import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { AdminforgotComponent } from './adminforgot/adminforgot.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ApprovalComponent } from './approval/approval.component';
import { ApplicationsComponent } from './applications/applications.component';

const routes: Routes = [
{  path : '' , redirectTo : '/adminlogin' , pathMatch : 'full'},
{  path : 'adminregistration' , component: AdminregistrationComponent },
{  path : 'adminlogin' , component: AdminloginComponent},
{  path : 'adminforgot' , component: AdminforgotComponent},
{  path : 'dashboard' , component: DashBoardComponent},
{  path : 'approval' , component: ApprovalComponent},
{  path : 'application' , component: ApplicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

