import { TestBed } from '@angular/core/testing';

import { SkillsS } from './skills-s';

describe('SkillsS', () => {
  let service: SkillsS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
