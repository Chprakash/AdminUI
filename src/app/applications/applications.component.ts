import { Component, OnInit } from '@angular/core';
import { ApplicationserviceService } from './applicationservice.service';
import { applicatonlist } from './applicationlist';
import { PublishButtonComponent } from './publish-button/publish-button.component';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;

  applicationdata: applicatonlist[];

  constructor(private appliservice: ApplicationserviceService) {
    this.columnDefs = [
      {headerName: 'Client Id', field: 'tenantUserId', sortable: true, filter: true, sortingOrder:["asc","desc"]},
      {headerName: 'Business Name', field: 'businessName', sortable: true, filter: true, sortingOrder:["asc","desc"]},
      {headerName: 'URL', field: 'url', sortable: true, filter: true, sortingOrder:["asc","desc"]},
      {headerName: 'Status', field: 'status', sortable: true, filter: true, sortingOrder:["asc","desc"]},
      {headerName: 'Publish', field: 'status', sortable: true, filter: true, sortingOrder:["asc","desc"], cellRendererFramework: PublishButtonComponent}
    ];
   }

  ngOnInit() {}

  onGridReady(params){
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi;
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
