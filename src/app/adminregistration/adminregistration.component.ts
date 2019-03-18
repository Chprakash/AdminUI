import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupserviceService } from './signupservice.service';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {

  constructor(private router: Router, private Signupservice: SignupserviceService) { }
  adminobj: object = [];


  ngOnInit() {
  }
  signup(signuodata) {
    console.log(signuodata);

    // ----------------------POST-----------------------------
    this.Signupservice.login(signuodata)
      .subscribe(
        data => {
          console.log('Success...DATA FROM LOGIN' + data);
          this.router.navigate(['./adminlogin']);
        }
      );
  }



}
