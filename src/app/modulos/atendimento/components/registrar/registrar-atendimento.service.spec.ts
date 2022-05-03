/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegistrarAtendimentoService } from './services/registrar-atendimento.service';

describe('Service: RegistrarAtendimento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrarAtendimentoService]
    });
  });

  it('should ...', inject([RegistrarAtendimentoService], (service: RegistrarAtendimentoService) => {
    expect(service).toBeTruthy();
  }));
});
