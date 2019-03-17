import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationserviceService {
  applicationUrl = environment.admin_baseurl + '/applications';
  constructor(private httpclient: HttpClient) { }

  getApplication(): Observable <any> {
    return this.httpclient.get(this.applicationUrl);
}

}
