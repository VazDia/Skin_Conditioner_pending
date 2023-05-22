import { TestBed } from '@angular/core/testing';

import { FlaskAPIService } from './flask-api.service';

describe('FlaskAPIService', () => {
  let service: FlaskAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlaskAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
