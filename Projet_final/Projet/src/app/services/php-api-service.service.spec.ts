import { TestBed } from '@angular/core/testing';

import { PhpApiServiceService } from './php-api-service.service';

describe('PhpApiServiceService', () => {
  let service: PhpApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
