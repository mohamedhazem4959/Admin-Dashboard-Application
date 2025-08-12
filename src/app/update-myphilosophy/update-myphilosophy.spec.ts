import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyphilosophy } from './update-myphilosophy';

describe('UpdateMyphilosophy', () => {
  let component: UpdateMyphilosophy;
  let fixture: ComponentFixture<UpdateMyphilosophy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMyphilosophy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMyphilosophy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
