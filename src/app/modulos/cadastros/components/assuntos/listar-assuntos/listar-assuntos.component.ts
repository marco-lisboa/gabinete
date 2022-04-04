import { isNull, nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { empty, noop } from 'rxjs';
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


  constructor(private assuntosService: AssuntosService) {}

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
    })
    alert('Cadastrado com sucesso!')
  }
}
