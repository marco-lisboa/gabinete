import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAssunto } from './model/IAssunto.model';
import { AssuntosService } from './services/assuntos.service';


@Component({
  selector: 'app-listar-assuntos',
  templateUrl: './listar-assuntos.component.html',
  styleUrls: ['./listar-assuntos.component.scss']
})
export class ListarAssuntosComponent implements OnInit {

  listarAssuntos: IAssunto[] = [];

  assunto: IAssunto = {
    descricao: ''
  }

  constructor(private assuntosService: AssuntosService, private router: Router) {}

  ngOnInit(): void {
    this.carregarAssuntos();
  }

  carregarAssuntos(): void {
  this.assuntosService.buscarTodos().subscribe(retorno => {
    this.listarAssuntos = retorno;
  });
  }

  cadastrarAssunto(): void {
    this.assuntosService.cadastrar(this.assunto).subscribe(retorno => {
      this.assunto =  retorno;
      this.assunto.ativo = true;
     this.carregarAssuntos();
     this.assunto.descricao = '';
    });
  }

  deletar(assunto: IAssunto): void {
    this.assuntosService.excluir(assunto.id).subscribe(() => {
      this.carregarAssuntos();
    });
  }
}
