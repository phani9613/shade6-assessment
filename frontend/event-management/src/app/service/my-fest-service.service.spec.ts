import { TestBed } from '@angular/core/testing';

import { MyFestServiceService } from './my-fest-service.service';

describe('MyFestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFestServiceService = TestBed.get(MyFestServiceService);
    expect(service).toBeTruthy();
  });
});
