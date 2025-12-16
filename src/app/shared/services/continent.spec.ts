import { TestBed } from '@angular/core/testing';

import { ContinentService } from './continent';

describe('Continent', () => {
  let service: ContinentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContinentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
