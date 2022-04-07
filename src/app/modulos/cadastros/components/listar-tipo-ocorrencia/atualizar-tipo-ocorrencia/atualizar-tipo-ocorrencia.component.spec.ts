import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarTipoOcorrenciaComponent } from './atualizar-tipo-ocorrencia.component';

describe('AtualizarTipoOcorrenciaComponent', () => {
  let component: AtualizarTipoOcorrenciaComponent;
  let fixture: ComponentFixture<AtualizarTipoOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarTipoOcorrenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarTipoOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
