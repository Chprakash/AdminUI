import { Component, OnInit } from '@angular/core';
import { ApplicationserviceService } from './applicationservice.service';
import { applicatonlist } from './applicationlist';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  applicationdata: applicatonlist[];

  constructor(private appliservice: ApplicationserviceService) { }

  ngOnInit() {
    console.log('Application OnInt function');
    this.appliservice.getApplication()
      .subscribe(
        data => {
            this.applicationdata = data;
            console.log('Application data...' , this.applicationdata);
        }
      );
  }

}
