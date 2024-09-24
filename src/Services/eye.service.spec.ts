import { TestBed } from '@angular/core/testing';

import { EyeService } from './eye.service';

describe('EyeService', () => {
  let service: EyeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EyeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
