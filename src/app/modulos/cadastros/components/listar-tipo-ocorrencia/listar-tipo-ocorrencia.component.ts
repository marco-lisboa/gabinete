import { Component, OnInit } from '@angular/core';
import { ITipoOcorrencia } from './model/ITipoOcorrencia.interface';
import { TipoOcorrenciaService } from './services/tipo-ocorrencia.service';

@Component({
  selector: 'app-listar-tipo-ocorrencia',
  templateUrl: './listar-tipo-ocorrencia.component.html',
  styleUrls: ['./listar-tipo-ocorrencia.component.scss']
})
export class ListarTipoOcorrenciaComponent implements OnInit {

  listarTipoOcorrencia: ITipoOcorrencia[] = [];

  tipoocorrencia: ITipoOcorrencia= {
    descricao: ''
  }

  constructor(private tipoocorrenciaService : TipoOcorrenciaService) { }

  ngOnInit(): void {
    this.carregarTipoOcorrencia();
  }

  carregarTipoOcorrencia(): void {
    this.tipoocorrenciaService.buscarTodos().subscribe(retorno => {
      this.listarTipoOcorrencia = retorno;
    });
    }

  cadastrarTipoOcorrencia(): void {
    this.tipoocorrenciaService.cadastrar(this.tipoocorrencia).subscribe(retorno => {
    this.tipoocorrencia =  retorno;
    this.carregarTipoOcorrencia();
    this.tipoocorrencia.descricao = '';
    });
  }
}
