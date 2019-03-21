import { Component, OnInit } from '@angular/core';
import { ApprovalserviceService } from './approvalservice.service';
import { Approvallist } from './approvallist';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';


@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;

  constructor(private appservice: ApprovalserviceService) {
    this.columnDefs = [
      {headerName: 'Client Id', field: 'tenantUserId', sortable: true, filter: true, sortingOrder:["asc","desc"]},
      {headerName: 'Business Name', field: 'businessName', sortable: true, filter: true, sortingOrder:["asc","desc"]},
      {headerName: 'Request Data', field: 'createdDate', sortable: true, filter: true, sortingOrder:["asc","desc"]},
      {headerName: 'Status', field: 'isApproved', sortable: true, filter: true, sortingOrder:["asc","desc"], cellRendererFramework: ToggleButtonComponent}
    ];
   }
  approvalData: Approvallist[];
  ngOnInit() {
    console.log('Approval Inside OnInit...');
    this.appservice.getApproval()
    .subscribe
    (
      data => {
        this.approvalData = data;
        console.log('approvalData', this.approvalData);
      }
    );
  }
  onGridReady(params){
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi;
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

}
