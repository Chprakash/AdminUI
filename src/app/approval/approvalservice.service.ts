import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Approvallist } from './approvallist';

@Injectable({
  providedIn: 'root'
})
export class ApprovalserviceService {

  approvalUrl = environment.admin_baseurl + '/business/approvals';

  constructor(private httpclient: HttpClient) { }

  getApproval(): Observable <any> {
      return this.httpclient.get(this.approvalUrl);
  }

updateApproval(updatedata: Approvallist): Observable<any> {
  console.log('Data from uapde service', updatedata);
  return this.httpclient.patch(this.approvalUrl, updatedata);
}
}
