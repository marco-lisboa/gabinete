import { TestBed } from '@angular/core/testing';

import { AtuacaoService } from './atuacao.service';

describe('AtuacaoService', () => {
  let service: AtuacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtuacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
