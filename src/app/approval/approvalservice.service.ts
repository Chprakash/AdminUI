import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApprovalserviceService {

  approvalUrl = environment.admin_baseurl + '/business/approvals';

  constructor(private httpclient: HttpClient) { }

  getApproval(): Observable <any> {
      return this.httpclient.get(this.approvalUrl);
  }

}
