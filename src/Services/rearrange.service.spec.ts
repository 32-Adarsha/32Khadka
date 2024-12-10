import { TestBed } from '@angular/core/testing';

import { RearrangeService } from './rearrange.service';

describe('RearrangeService', () => {
  let service: RearrangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RearrangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
