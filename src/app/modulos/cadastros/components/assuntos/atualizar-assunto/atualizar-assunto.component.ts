import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAssunto } from '../listar-assuntos/model/IAssunto.model';
import { AssuntosService } from '../listar-assuntos/services/assuntos.service';

@Component({
  selector: 'app-atualizar-assunto',
  templateUrl: './atualizar-assunto.component.html',
  styleUrls: ['./atualizar-assunto.component.scss']
})
export class AtualizarAssuntoComponent implements OnInit {

  assunto: IAssunto = {
    descricao: ''
  }




  constructor(private assuntosService: AssuntosService,
    private router: Router,
    private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.ActivatedRouter.snapshot.paramMap.get('id'));
    this.assuntosService.buscarPorId(id).subscribe(retorno =>{
      this.assunto = retorno;
    });
  }

  cadastrarAssunto(): void {
    this.assuntosService.editar(this.assunto).subscribe(retorno => {
      this.assunto =  retorno;
    this.router.navigate(['/modulos/cadastros/assuntos']);
    });
  }
}
