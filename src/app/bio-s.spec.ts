import { TestBed } from '@angular/core/testing';

import { BioS } from './bio-s';

describe('BioS', () => {
  let service: BioS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BioS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
