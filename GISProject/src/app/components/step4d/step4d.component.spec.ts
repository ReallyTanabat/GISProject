import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4dComponent } from './step4d.component';

describe('Step4dComponent', () => {
  let component: Step4dComponent;
  let fixture: ComponentFixture<Step4dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step4dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
