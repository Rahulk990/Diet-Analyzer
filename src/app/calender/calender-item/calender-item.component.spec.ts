import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderItemComponent } from './calender-item.component';

describe('CalenderItemComponent', () => {
  let component: CalenderItemComponent;
  let fixture: ComponentFixture<CalenderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
