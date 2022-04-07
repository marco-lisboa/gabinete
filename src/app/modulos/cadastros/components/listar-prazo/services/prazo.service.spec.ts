import { TestBed } from '@angular/core/testing';

import { PrazoService } from './prazo.service';

describe('PrazoService', () => {
  let service: PrazoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrazoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
