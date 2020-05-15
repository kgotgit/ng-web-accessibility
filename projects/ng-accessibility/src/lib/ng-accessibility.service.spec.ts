import { TestBed } from '@angular/core/testing';

import { NgAccessibilityService } from './ng-accessibility.service';

describe('NgAccessibilityService', () => {
  let service: NgAccessibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAccessibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
