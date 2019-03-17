import { TestBed } from '@angular/core/testing';

import { ApprovalserviceService } from './approvalservice.service';

describe('ApprovalserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprovalserviceService = TestBed.get(ApprovalserviceService);
    expect(service).toBeTruthy();
  });
});
