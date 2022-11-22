import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5cComponent } from './step5c.component';

describe('Step5cComponent', () => {
  let component: Step5cComponent;
  let fixture: ComponentFixture<Step5cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step5cComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step5cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
