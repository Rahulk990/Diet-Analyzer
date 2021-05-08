import { TestBed } from '@angular/core/testing';

import { ItemModelService } from './item-model.service';

describe('ItemModelService', () => {
  let service: ItemModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
