import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4bComponent } from './step4b.component';

describe('Step4bComponent', () => {
  let component: Step4bComponent;
  let fixture: ComponentFixture<Step4bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step4bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
