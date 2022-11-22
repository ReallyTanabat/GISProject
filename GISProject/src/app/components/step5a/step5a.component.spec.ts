import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5aComponent } from './step5a.component';

describe('Step5aComponent', () => {
  let component: Step5aComponent;
  let fixture: ComponentFixture<Step5aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step5aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step5aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
