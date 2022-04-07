import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrigem } from '../model/IOrigem.interface';
import { OrigemService } from '../services/origem.service';

@Component({
  selector: 'app-atualizar-origem',
  templateUrl: './atualizar-origem.component.html',
  styleUrls: ['./atualizar-origem.component.scss']
})
export class AtualizarOrigemComponent implements OnInit {

  origem: IOrigem = {
    descricao: ''
  }

  constructor(private origemService: OrigemService,
    private router: Router,
    private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.ActivatedRouter.snapshot.paramMap.get('id'));
    this.origemService.buscarPorId(id).subscribe(retorno =>{
      this.origem = retorno;
    });
  }

  editarOrigem(): void {
    this.origemService.editar(this.origem).subscribe(retorno => {
      this.origem =  retorno;
    this.router.navigate(['/modulos/cadastros/origem']);
    });
  }

}
