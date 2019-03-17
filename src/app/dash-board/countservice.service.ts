import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountserviceService {
  countUrl = environment.admin_baseurl + '/business/count';

  constructor(private httpclient: HttpClient) { }


  getcountl(): Observable <any> {
    return this.httpclient.get(this.countUrl);
}
}
