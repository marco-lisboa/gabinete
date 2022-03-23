import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tipo-ocorrencia',
  templateUrl: './listar-tipo-ocorrencia.component.html',
  styleUrls: ['./listar-tipo-ocorrencia.component.scss']
})
export class ListarTipoOcorrenciaComponent implements OnInit {

  descricao: string;

  listaOcorrencia: any[] = [
    { id: 1, descricao: 'Ocorrência 1' },
    { id: 2, descricao: 'Ocorrência 2' }
];

  constructor() { }

  ngOnInit(): void {
  }

}
