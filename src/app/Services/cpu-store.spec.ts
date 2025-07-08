import { TestBed } from '@angular/core/testing';

import { CpuStore } from './cpu-store';

describe('CpuStore', () => {
  let service: CpuStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpuStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
