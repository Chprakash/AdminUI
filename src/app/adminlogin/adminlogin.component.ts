import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { logindata } from './logindata';
import { LoginserviceService } from './loginservice.service';
import {LocalStorageService} from 'ngx-webstorage';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router , private logservice: LoginserviceService , private localSt: LocalStorageService ) { }
  loginObj: object = [];
  id: number;
  firstName: string;
  lastName: string;
  emailID: string;

  // tslint:disable-next-line:no-var-keyword
   loginfo = new logindata();
   errorMessage = '';





 ngOnInit() {
  }
  login(logdata) {
    console.log(logdata);

    this.loginObj = {
      email: logdata.email,
      password: logdata.password
    };
  // ----------------------POST-----------------------------

    this.logservice.login(logdata)
    .subscribe(
      data => {
          console.log('Success!' , data);
          this.router.navigate(['/dashboard']);
          this.id = data.id;
          this.firstName = data.firstName;
          this.lastName = data.lastName;
          this.emailID = data.emailID;
          console.log('DATA FROM SERVER...@' + this.id + '@' + this.firstName + '@' + this.lastName + '@' + this.emailID);

          this.localSt.store('id', data.id);
          this.localSt.store('firstName', data.firstName);
          this.localSt.store('lastName', data.lastName);
          this.localSt.store('emailID', data.emailID);
      },
      error => this.errorMessage = error.statusText

    );
    console.log(this.errorMessage);
    console.log(logdata);

    // console.log('DATA FROM SERVER...' + this.id + '' + this.firsName + '' + this.lastName + '' + this.emailID);



    // tslint:disable-next-line:prefer-const
    // let email = logdata.email;
    // tslint:disable-next-line:prefer-const
    // let password = logdata.password;
    // console.log(email + ' ' + password);

    // if (email === 'admin' || password === '12345') {
    //     alert('Credintional correct..');
    //     this.router.navigate(['/dashnoard']);
    // } else {
    //   alert('Credintional Wrong..');
    // }


  }
}
