import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-atuacao',
  templateUrl: './listar-atuacao.component.html',
  styleUrls: ['./listar-atuacao.component.scss']
})
export class ListarAtuacaoComponent implements OnInit {

  descricao: string;

  listaAtuacao: any[] = [
    { id: 1, descricao: 'Atuação 1' },
    { id: 2, descricao: 'Atuação 2' }
];

  constructor() { }

  ngOnInit(): void {
  }

}
