import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEducation } from './update-education';

describe('UpdateEducation', () => {
  let component: UpdateEducation;
  let fixture: ComponentFixture<UpdateEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEducation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEducation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
