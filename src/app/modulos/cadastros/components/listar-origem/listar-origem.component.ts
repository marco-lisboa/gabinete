import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-origem',
  templateUrl: './listar-origem.component.html',
  styleUrls: ['./listar-origem.component.scss']
})
export class ListarOrigemComponent implements OnInit {

  descricao: string;

  listaOrigem: any[] = [
    { id: 1, descricao: 'Origem 1' },
    { id: 2, descricao: 'Origem 2' }
];

  constructor() { }

  ngOnInit(): void {
  }

}
