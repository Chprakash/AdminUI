import { Component, OnInit } from '@angular/core';
import { ApprovalserviceService } from './approvalservice.service';
import { Approvallist } from './approvallist';
import {LocalStorageService} from 'ngx-webstorage';


@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  constructor(private appservice: ApprovalserviceService , private storage: LocalStorageService) { }
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

  approval(data1: any) {
    // console.log('Check box clicked...' , data1);
    data1.loggedInUserId = this.storage.retrieve('id');
    if (data1.isApproved) {
      data1.isApproved = false;
     } else {
      data1.isApproved = true;
     }
    console.log(data1);

    this.appservice.updateApproval(data1)
    .subscribe(
      data => {
        console.log('Success...DATA FROM update' + data);
      }
      );
  }


}
