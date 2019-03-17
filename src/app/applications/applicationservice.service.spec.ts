import { TestBed } from '@angular/core/testing';

import { ApplicationserviceService } from './applicationservice.service';

describe('ApplicationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationserviceService = TestBed.get(ApplicationserviceService);
    expect(service).toBeTruthy();
  });
});
