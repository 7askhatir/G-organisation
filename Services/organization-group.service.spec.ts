import { TestBed } from '@angular/core/testing';

import { OrganizationGroupService } from './organization-group.service';

describe('OrganizationGroupService', () => {
  let service: OrganizationGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
