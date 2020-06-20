import { TestBed } from '@angular/core/testing';

import { StoreServicService } from './store-servic.service';

describe('StoreServicService', () => {
  let service: StoreServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
