import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { AdminforgotComponent } from './adminforgot/adminforgot.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginserviceService } from './adminlogin/loginservice.service';
import { ApprovalComponent } from './approval/approval.component';
import { ApplicationsComponent } from './applications/applications.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgGridModule } from 'ag-grid-angular/main';
import { ToggleButtonComponent } from './approval/toggle-button/toggle-button.component';
import { PublishButtonComponent } from './applications/publish-button/publish-button.component';
// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminregistrationComponent,
    AdminforgotComponent,
    DashBoardComponent,
    SideMenuComponent,
    ApprovalComponent,
    ApplicationsComponent,
    NavbarComponent,
    ToggleButtonComponent,
    PublishButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    // HttpClient,
    NgxWebstorageModule.forRoot(),
    AgGridModule.withComponents([ApprovalComponent, ApplicationsComponent])
  ],
  providers: [LoginserviceService], entryComponents: [ToggleButtonComponent, PublishButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
