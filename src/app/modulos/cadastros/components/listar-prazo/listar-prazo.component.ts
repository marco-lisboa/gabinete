import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-prazo',
  templateUrl: './listar-prazo.component.html',
  styleUrls: ['./listar-prazo.component.scss']
})
export class ListarPrazoComponent implements OnInit {

  descricao: string;

  listaPrazo: any[] = [
    { id: 1, descricao: 'Prazo 1' },
    { id: 2, descricao: 'Prazo 2' }
];

  constructor() { }

  ngOnInit(): void {
  }

}
