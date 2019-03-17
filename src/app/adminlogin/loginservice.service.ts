import { Injectable } from '@angular/core';
import { logindata } from './logindata';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  urlapi = environment.admin_baseurl + '/users/login';

  constructor(private http: HttpClient) { }

  login(loginfo: logindata): Observable<any> {
    return this.http.post(this.urlapi, loginfo)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
