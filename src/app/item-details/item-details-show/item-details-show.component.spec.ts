import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsShowComponent } from './item-details-show.component';

describe('ItemDetailsShowComponent', () => {
  let component: ItemDetailsShowComponent;
  let fixture: ComponentFixture<ItemDetailsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
