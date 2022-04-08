import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
    descricao: '',
    ativo: true
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
    this.origem.id = (0);
    });
  }

  deletar(origem: IOrigem): void {
    this.origemService.excluir(origem.id).subscribe(() => {
      Swal.fire({
        title: 'Excluído com sucesso!',
        icon: 'success',
        confirmButtonColor: '#3085d6'
      }),
      this.carregarOrigens();
    });
  }
}
