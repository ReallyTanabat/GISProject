import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5dComponent } from './step5d.component';

describe('Step5dComponent', () => {
  let component: Step5dComponent;
  let fixture: ComponentFixture<Step5dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step5dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step5dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
