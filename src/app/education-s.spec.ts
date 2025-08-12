import { TestBed } from '@angular/core/testing';

import { EducationS } from './education-s';

describe('EducationS', () => {
  let service: EducationS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
