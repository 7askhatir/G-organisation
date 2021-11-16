import { TestBed } from '@angular/core/testing';

import { DisableServiseService } from './disable-servise.service';

describe('DisableServiseService', () => {
  let service: DisableServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisableServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
