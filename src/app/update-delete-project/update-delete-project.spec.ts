import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteProject } from './update-delete-project';

describe('UpdateDeleteProject', () => {
  let component: UpdateDeleteProject;
  let fixture: ComponentFixture<UpdateDeleteProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDeleteProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDeleteProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
