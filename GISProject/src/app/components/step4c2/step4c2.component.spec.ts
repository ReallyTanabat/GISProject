import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4c2Component } from './step4c2.component';

describe('Step4c2Component', () => {
  let component: Step4c2Component;
  let fixture: ComponentFixture<Step4c2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step4c2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
