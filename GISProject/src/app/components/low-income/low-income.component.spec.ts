import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowIncomeComponent } from './low-income.component';

describe('LowIncomeComponent', () => {
  let component: LowIncomeComponent;
  let fixture: ComponentFixture<LowIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
