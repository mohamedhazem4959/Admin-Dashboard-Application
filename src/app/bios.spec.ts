import { TestBed } from '@angular/core/testing';

import { Bios } from './bios';

describe('Bios', () => {
  let service: Bios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
