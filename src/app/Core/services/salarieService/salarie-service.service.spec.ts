import { TestBed } from '@angular/core/testing';

import { SalarieServiceService } from './salarie-service.service';

describe('SalarieServiceService', () => {
  let service: SalarieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalarieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
