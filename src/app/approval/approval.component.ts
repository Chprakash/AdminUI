import { Component, OnInit } from '@angular/core';
import { ApprovalserviceService } from './approvalservice.service';
import { Approvallist } from './approvallist';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import * as $ from 'jquery';
import {LocalStorageService} from 'ngx-webstorage';


@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  user_fname;
  // tslint:disable-next-line:variable-name
  user_lname;

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;

  constructor(private appservice: ApprovalserviceService, private storage: LocalStorageService ) {
    this.columnDefs = [
      {headerName: 'Client Id', field: 'tenantUserId', sortable: true, filter: true, sortingOrder: ['asc', 'desc']},
      {headerName: 'Business Name', field: 'businessName', sortable: true, filter: true, sortingOrder: ['asc', 'desc']},
      {headerName: 'Request Date', field: 'createdDate', sortable: true, filter: true, sortingOrder: ['asc', 'desc']},
      {headerName: 'Approved Date', field: 'updatedDate', sortable: true, filter: true, sortingOrder: ['asc', 'desc']},
      // tslint:disable-next-line:max-line-length
      {headerName: 'Status', field: 'isApproved', sortable: true, filter: true, sortingOrder: ['asc', 'desc'], autoHeight: true, cellRendererFramework: ToggleButtonComponent}
    ];

   }
  approvalData: Approvallist[];
  ngOnInit() {
    this.user_fname = this.storage.retrieve('firstname');
    this.user_lname = this.storage.retrieve('lastname');
    console.log(this.user_fname);
    // this.getspiner();
    console.log('Approval Inside OnInit...');
    this.appservice.getApproval()
    .subscribe
    (
      data => {
        this.approvalData = data;
        console.log('approvalData', this.approvalData);
      }
    );
    // *****Menu Toggle Button**************
    // tslint:disable-next-line:only-arrow-functions
    // $(document).ready(function() {
      // tslint:disable-next-line:only-arrow-functions
      // $('#sidebarCollapse').on('click', function() {
      //     $('#sidebar').toggleClass('active');
      // });
  // });


  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.appservice.getApproval()
    .subscribe
    (
      data => {
        this.approvalData = data;
        params.api.setRowData(data);
        console.log('approvalData', this.approvalData);
      }
    );

  }

//  getspiner() {
//     this.spinner.show();

//     setTimeout(() => {
//         /** spinner ends after 5 seconds */
//         this.spinner.hide();
//     }, 5000);
//   }

}
