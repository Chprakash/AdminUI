import { Component, OnInit } from '@angular/core';
import { ApprovalserviceService } from '../approvalservice.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
  private data : any;
  private params : any;
  constructor(private appservice: ApprovalserviceService , private storage: LocalStorageService) { }

  ngOnInit() {
  }
  agInit(params){
    this.params=params.data;
    this.data=params.value;
  }

  approval(){
    this.params.loggedInUserId = this.storage.retrieve('id');
    if (this.params.isApproved) {
      this.data=false;
      this.params.isApproved = false;
     } else {
       this.data=true;
      this.params.isApproved = true;
     }

    this.appservice.updateApproval(this.params)
    .subscribe(
      data => {}
      );
  }
  
}
