import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4d2Component } from './step4d2.component';

describe('Step4d2Component', () => {
  let component: Step4d2Component;
  let fixture: ComponentFixture<Step4d2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step4d2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4d2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
