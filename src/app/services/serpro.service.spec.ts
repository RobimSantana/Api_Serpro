import { TestBed } from '@angular/core/testing';

import { SerproService } from './serpro.service';

describe('SerproService', () => {
  let service: SerproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
