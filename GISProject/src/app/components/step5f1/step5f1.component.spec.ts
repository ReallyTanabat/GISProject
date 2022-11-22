import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5f1Component } from './step5f1.component';

describe('Step5f1Component', () => {
  let component: Step5f1Component;
  let fixture: ComponentFixture<Step5f1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step5f1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step5f1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
