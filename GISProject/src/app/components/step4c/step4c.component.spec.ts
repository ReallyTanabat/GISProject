import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4cComponent } from './step4c.component';

describe('Step4cComponent', () => {
  let component: Step4cComponent;
  let fixture: ComponentFixture<Step4cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step4cComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
