import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoOcorrenciaComponent } from './listar-tipo-ocorrencia.component';

describe('ListarTipoOcorrenciaComponent', () => {
  let component: ListarTipoOcorrenciaComponent;
  let fixture: ComponentFixture<ListarTipoOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoOcorrenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
