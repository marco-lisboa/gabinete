import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoria } from '../model/ICategoria.model';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-atualizar-categoria',
  templateUrl: './atualizar-categoria.component.html',
  styleUrls: ['./atualizar-categoria.component.scss']
})
export class AtualizarCategoriaComponent implements OnInit {

  categoria: ICategoria = {
    descricao: ''
  }

  constructor(private categoriaService: CategoriaService,
    private router: Router,
    private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.ActivatedRouter.snapshot.paramMap.get('id'));
    this.categoriaService.buscarPorId(id).subscribe(retorno =>{
      this.categoria = retorno;
    });
  }


  editarCategoria(): void {
    this.categoriaService.editar(this.categoria).subscribe(retorno => {
      this.categoria =  retorno;
    this.router.navigate(['/modulos/cadastros/categoria']);
    });
  }
}
