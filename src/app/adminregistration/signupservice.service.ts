import { Injectable } from '@angular/core';
import { signupdata } from './signupdata';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {


urlapi = environment.admin_baseurl + '/users';

  constructor(private http: HttpClient) { }

  login(signupinfo: signupdata ): Observable<any> {
    return this.http.post(this.urlapi, signupinfo);
  }
}
