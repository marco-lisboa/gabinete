import { Component, OnInit } from '@angular/core';
import { IAssunto } from './model/IAssunto.model';
import { AssuntosService } from './services/assuntos.service';

@Component({
  selector: 'app-listar-assuntos',
  templateUrl: './listar-assuntos.component.html',
  styleUrls: ['./listar-assuntos.component.scss']
})
export class ListarAssuntosComponent implements OnInit {

  listaAssuntos: IAssunto[] = [];

  constructor(private assuntosService: AssuntosService) {}

  ngOnInit(): void {
    this.carregarAssuntos();
  }

  carregarAssuntos(): void {
  this.assuntosService.buscarTodos().subscribe(retorno => {
    this.listaAssuntos = retorno;
  });
  }

  cadastrarAssunto(): void {
    alert('Cadastrado com sucesso!')
  }
}
