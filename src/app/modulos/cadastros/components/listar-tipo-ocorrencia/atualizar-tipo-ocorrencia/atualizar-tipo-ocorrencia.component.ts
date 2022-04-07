import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipoOcorrencia } from '../model/ITipoOcorrencia.interface';
import { TipoOcorrenciaService } from '../services/tipo-ocorrencia.service';

@Component({
  selector: 'app-atualizar-tipo-ocorrencia',
  templateUrl: './atualizar-tipo-ocorrencia.component.html',
  styleUrls: ['./atualizar-tipo-ocorrencia.component.scss']
})
export class AtualizarTipoOcorrenciaComponent implements OnInit {

  tipoocorrencia: ITipoOcorrencia= {
    descricao: ''
  }

  constructor(private tipoocorrenciaService: TipoOcorrenciaService,
     private router: Router,
     private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.ActivatedRouter.snapshot.paramMap.get('id'));
    this.tipoocorrenciaService.buscarPorId(id).subscribe(retorno =>{
      this.tipoocorrencia = retorno;
    });
  }

  editarTipoOcorrencia(): void {
    this.tipoocorrenciaService.editar(this.tipoocorrencia).subscribe(retorno => {
      this.tipoocorrencia =  retorno;
    this.router.navigate(['/modulos/cadastros/tipo-ocorrencia']);
    });
  }

}
