import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAtuacaoComponent } from './listar-atuacao.component';

describe('ListarAtuacaoComponent', () => {
  let component: ListarAtuacaoComponent;
  let fixture: ComponentFixture<ListarAtuacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAtuacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAtuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
