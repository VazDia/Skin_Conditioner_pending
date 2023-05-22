import { TestBed } from '@angular/core/testing';

import { ApiFService } from './api-f.service';

describe('ApiFService', () => {
  let service: ApiFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
