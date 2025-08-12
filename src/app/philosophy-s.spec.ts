import { TestBed } from '@angular/core/testing';

import { PhilosophyS } from './philosophy-s';

describe('PhilosophyS', () => {
  let service: PhilosophyS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhilosophyS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
