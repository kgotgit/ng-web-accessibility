import { TestBed } from '@angular/core/testing';

import { DynaLoaderService } from './dyna-loader.service';

describe('DynaLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynaLoaderService = TestBed.get(DynaLoaderService);
    expect(service).toBeTruthy();
  });
});
