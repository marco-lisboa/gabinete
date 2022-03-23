import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {

  descricao: string;

  listaCategorias: any[] = [
    { id: 1, descricao: 'Categoria 1' },
    { id: 2, descricao: 'Categoria 2' }
];

  constructor() {}

  ngOnInit(): void {}
}
