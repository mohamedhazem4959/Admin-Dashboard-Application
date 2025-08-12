import { TestBed } from '@angular/core/testing';

import { ProjectS } from './project-s';

describe('ProjectS', () => {
  let service: ProjectS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
