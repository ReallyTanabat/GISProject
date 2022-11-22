import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5eComponent } from './step5e.component';

describe('Step5eComponent', () => {
  let component: Step5eComponent;
  let fixture: ComponentFixture<Step5eComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step5eComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step5eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
