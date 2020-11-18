import { TestBed } from '@angular/core/testing';

import { FwdalgoService } from './fwdalgo.service';

describe('FwdalgoService', () => {
  let service: FwdalgoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FwdalgoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
