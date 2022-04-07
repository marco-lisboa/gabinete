import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrgao } from '../model/IOrgao.interface';
import { OrgaoService } from '../services/orgao.service';

@Component({
  selector: 'app-atualizar-orgao',
  templateUrl: './atualizar-orgao.component.html',
  styleUrls: ['./atualizar-orgao.component.scss']
})
export class AtualizarOrgaoComponent implements OnInit {

  orgao: IOrgao = {
    descricao: ''
  }

  constructor(private orgaoService: OrgaoService,
    private router: Router,
    private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.ActivatedRouter.snapshot.paramMap.get('id'));
    this.orgaoService.buscarPorId(id).subscribe(retorno =>{
      this.orgao = retorno;
    });
  }

  editarOrgao(): void {
    this.orgaoService.editar(this.orgao).subscribe(retorno => {
      this.orgao =  retorno;
    this.router.navigate(['/modulos/cadastros/orgao']);
    });
  }

}
