import { Component, OnInit } from '@angular/core';
import { ApplicationserviceService } from './applicationservice.service';
import { applicatonlist } from './applicationlist';
import { PublishButtonComponent } from './publish-button/publish-button.component';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';
import {LocalStorageService} from 'ngx-webstorage';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  user_fname;
  // tslint:disable-next-line:variable-name
  user_lname;

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;

  applicationdata: applicatonlist[];

  constructor(private appliservice: ApplicationserviceService, private storage: LocalStorageService) {
    this.columnDefs = [
      {headerName: 'Client Id', field: 'tenantUserId', sortable: true, filter: true, sortingOrder: ['asc', 'desc']},
      {headerName: 'Business Name', field: 'businessName', sortable: true, filter: true, sortingOrder: ['asc', 'desc']},
      {headerName: 'URL', field: 'url', sortable: true, filter: true, sortingOrder: ['asc', 'desc']},
      {headerName: 'Status', field: 'status', sortable: true, filter: true, sortingOrder: ['asc', 'desc']},
      // tslint:disable-next-line:max-line-length
      {headerName: 'Publish', field: 'status', sortable: true, filter: true, sortingOrder: ['asc', 'desc'], cellRendererFramework: PublishButtonComponent}
    ];
   }

  ngOnInit() {

    this.user_fname = this.storage.retrieve('firstname');
    this.user_lname = this.storage.retrieve('lastname');
    console.log(this.user_fname);

     // tslint:disable-next-line:only-arrow-functions
    // $(document).ready(function() {
      // tslint:disable-next-line:only-arrow-functions
  //     $('#sidebarCollapse').on('click', function() {
  //         $('#sidebar').toggleClass('active');
  //     });
  // });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.appliservice.getApplication()
    .subscribe
    (
      data => {
        console.log(data);
        params.api.setRowData(data);
        console.log('Application data...' , data);
      }
    );

  }

}
