import { TestBed } from '@angular/core/testing';

import { GeordieService } from './geordie.service';

describe('GeordieService', () => {
  let service: GeordieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeordieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
