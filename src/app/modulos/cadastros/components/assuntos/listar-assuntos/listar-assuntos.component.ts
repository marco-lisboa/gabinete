import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-assuntos',
  templateUrl: './listar-assuntos.component.html',
  styleUrls: ['./listar-assuntos.component.scss']
})
export class ListarAssuntosComponent implements OnInit {

  id: number;
  descricao: string;
  ativo: boolean;

  listaStrings: string[] = ['Assunto 1', 'Assunto 2', 'Assunto 3'];
  listaId: number[] = [1, 2, 3];

  listaAssuntos: any[] = [
    { id: 1, descricao: 'Assunto 1', ativo: true},
    { id: 2, descricao: 'Assunto 2'},
    { id: 3, descricao: 'Assunto 3'}
  ];

  constructor() {}

  ngOnInit(): void {
  }

  cadastrarAssunto(): void {
    console.log('Descrição: ', this.descricao);
    console.log('Id: ', this.id);
    console.log('Ativo: ', this.ativo);
    alert('Cadastrado com sucesso!')
  }
}
