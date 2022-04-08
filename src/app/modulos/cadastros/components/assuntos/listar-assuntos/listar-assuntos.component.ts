import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
    descricao: '',
    ativo: true
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
     this.carregarAssuntos();
     this.assunto.descricao = '';
    });
  }

  deletar(assunto: IAssunto): void {
    this.assuntosService.excluir(assunto.id).subscribe(() => {
      Swal.fire({
        title: 'Excluído com sucesso!',
        icon: 'success',
        confirmButtonColor: '#3085d6'
      }),
      this.carregarAssuntos();
    });
  }
}
