import { Component, OnInit } from '@angular/core';
import { IOrigem } from './model/IOrigem.interface';
import { OrigemService } from './services/origem.service';

@Component({
  selector: 'app-listar-origem',
  templateUrl: './listar-origem.component.html',
  styleUrls: ['./listar-origem.component.scss']
})
export class ListarOrigemComponent implements OnInit {

  listarOrigens: IOrigem[] = [];

  origem: IOrigem = {
    descricao: ''
  }

  constructor(private origemService: OrigemService) { }

  ngOnInit(): void {
    this.carregarOrigens();
  }

  carregarOrigens(): void {
    this.origemService.buscarTodos().subscribe(retorno => {
      this.listarOrigens = retorno;
    });
    }

  cadastrarOrigem(): void {
    this.origemService.cadastrar(this.origem).subscribe(retorno => {
    this.origem =  retorno;
    this.carregarOrigens();
    this.origem.descricao = '';
    });
  }

  deletar(categoria: IOrigem): void {
    this.origemService.excluir(categoria.id).subscribe(() => {
      this.carregarOrigens();
    });
  }
}
