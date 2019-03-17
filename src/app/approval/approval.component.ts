import { Component, OnInit } from '@angular/core';
import { ApprovalserviceService } from './approvalservice.service';
import { Approvallist } from './approvallist';


@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  constructor(private appservice: ApprovalserviceService) { }
approvalData: Approvallist[];
  ngOnInit() {
    console.log('Approval Inside OnInit...');
    this.appservice.getApproval()
    .subscribe
    (
      data => {
        this.approvalData = data;
      }
    );
  }

}
