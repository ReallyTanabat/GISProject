import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5f2Component } from './step5f2.component';

describe('Step5f2Component', () => {
  let component: Step5f2Component;
  let fixture: ComponentFixture<Step5f2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step5f2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step5f2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
