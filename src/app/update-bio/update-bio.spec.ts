import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBio } from './update-bio';

describe('UpdateBio', () => {
  let component: UpdateBio;
  let fixture: ComponentFixture<UpdateBio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
