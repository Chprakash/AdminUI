import { Component, OnInit } from '@angular/core';
import { CountserviceService } from './countservice.service';
import { Count } from './count';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  // show = true;
  countdata: Count;
  constructor(private countservice: CountserviceService) { }

  ngOnInit() {

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
