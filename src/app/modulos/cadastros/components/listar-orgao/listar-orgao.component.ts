import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-orgao',
  templateUrl: './listar-orgao.component.html',
  styleUrls: ['./listar-orgao.component.scss']
})
export class ListarOrgaoComponent implements OnInit {

  descricao: string;

  listaOrgao: any[] = [
    { id: 1, descricao: 'Órgão 1' },
    { id: 2, descricao: 'Órgão 2' }
];

  constructor() { }

  ngOnInit(): void {
  }

}
