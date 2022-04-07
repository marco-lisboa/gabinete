import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPrazo } from '../model/IPrazo.interface';
import { PrazoService } from '../services/prazo.service';

@Component({
  selector: 'app-atualizar-prazo',
  templateUrl: './atualizar-prazo.component.html',
  styleUrls: ['./atualizar-prazo.component.scss']
})
export class AtualizarPrazoComponent implements OnInit {

  prazo: IPrazo = {
    descricao: ''
  }

  constructor(private prazoService: PrazoService,
    private router: Router,
    private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.ActivatedRouter.snapshot.paramMap.get('id'));
    this.prazoService.buscarPorId(id).subscribe(retorno =>{
      this.prazo = retorno;
    });
  }

  editarPrazo(): void {
    this.prazoService.editar(this.prazo).subscribe(retorno => {
      this.prazo =  retorno;
    this.router.navigate(['/modulos/cadastros/prazo']);
    });
  }

}
