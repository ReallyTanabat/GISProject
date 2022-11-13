import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBRComponent } from './mbr.component';

describe('MBRComponent', () => {
  let component: MBRComponent;
  let fixture: ComponentFixture<MBRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MBRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
