import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5bComponent } from './step5b.component';

describe('Step5bComponent', () => {
  let component: Step5bComponent;
  let fixture: ComponentFixture<Step5bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step5bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step5bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
