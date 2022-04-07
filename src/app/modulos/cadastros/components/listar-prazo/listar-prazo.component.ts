import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { IPrazo } from './model/IPrazo.interface';
import { PrazoService } from './services/prazo.service';

@Component({
  selector: 'app-listar-prazo',
  templateUrl: './listar-prazo.component.html',
  styleUrls: ['./listar-prazo.component.scss']
})
export class ListarPrazoComponent implements OnInit {

  listarPrazos: IPrazo[] = [];

  prazo: IPrazo = {
    descricao: ''
  }

  constructor(private prazoService: PrazoService) { }

  ngOnInit(): void {
    this.carregarPrazos();
  }

  carregarPrazos(): void {
    this.prazoService.buscarTodos().subscribe(retorno => {
      this.listarPrazos = retorno;
    });
    }

    cadastrarPrazo(): void {
      this.prazoService.cadastrar(this.prazo).subscribe(retorno => {
      this.prazo =  retorno;
      this.carregarPrazos();
      this.prazo.descricao = '';
      });
    }

    deletar(categoria: IPrazo): void {
      this.prazoService.excluir(categoria.id).subscribe(() => {
        Swal.fire({
          title: 'Excluído com sucesso!',
          icon: 'success',
          confirmButtonColor: '#3085d6'
        }),
        this.carregarPrazos();
      });
    }
}
