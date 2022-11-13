import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartMatComponent } from './part-mat.component';

describe('PartMatComponent', () => {
  let component: PartMatComponent;
  let fixture: ComponentFixture<PartMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartMatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
