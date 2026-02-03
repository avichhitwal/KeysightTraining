import { TestBed } from '@angular/core/testing';

import { Sailor } from './sailor';

describe('Sailor', () => {
  let service: Sailor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sailor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
