import { TestBed } from '@angular/core/testing';

import { CountserviceService } from './countservice.service';

describe('CountserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountserviceService = TestBed.get(CountserviceService);
    expect(service).toBeTruthy();
  });
});
