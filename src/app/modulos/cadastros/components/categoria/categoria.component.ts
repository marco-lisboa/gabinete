import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ICategoria } from './model/ICategoria.model';
import { CategoriaService } from './services/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {

  listarCategorias: ICategoria[] = [];

  categoria: ICategoria = {
    descricao: '',
    ativo: true
  }

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  carregarCategorias(): void {
    this.categoriaService.buscarTodos().subscribe(retorno => {
      this.listarCategorias = retorno;
    });
    }

  cadastrarCategoria(): void {
    this.categoriaService.cadastrar(this.categoria).subscribe(retorno => {
    this.categoria =  retorno;
    this.carregarCategorias();
    this.categoria.descricao = '';
    this.categoria.id = (0);
    });
  }

  deletar(categoria: ICategoria): void {
    this.categoriaService.excluir(categoria.id).subscribe(() => {
      Swal.fire({
        title: 'Excluído com sucesso!',
        icon: 'success',
        confirmButtonColor: '#3085d6'
      }),
      this.carregarCategorias();
    });
  }
}
