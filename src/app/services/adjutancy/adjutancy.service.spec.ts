import { TestBed } from '@angular/core/testing';

import { AdjutancyService } from './adjutancy.service';

describe('AdjutancyService', () => {
  let service: AdjutancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdjutancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
