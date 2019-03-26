import { Component, OnInit } from '@angular/core';
import { CountserviceService } from './countservice.service';
import { Count } from './count';
import * as $ from 'jquery';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  user_fname;
  // tslint:disable-next-line:variable-name
  user_lname;
  // show = true;
  countdata: Count;
  constructor(private countservice: CountserviceService, private storage: LocalStorageService) { }

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


    console.log('Approval Inside OnInit...');
    this.countservice.getcountl()
    .subscribe
    (
      data => {
        this.countdata = data;
        console.log('COUNTDATA..' + this.countdata);
      }
    );
  }
  // toggleCollapse() {
  //   this.show = !this.show;
  // }


}
