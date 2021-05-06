import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsEditComponent } from './item-details-edit.component';

describe('ItemDetailsEditComponent', () => {
  let component: ItemDetailsEditComponent;
  let fixture: ComponentFixture<ItemDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
