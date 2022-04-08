import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
    descricao: '',
    ativo: true
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
    this.tipoocorrencia.id = (0);
    });
  }

  deletar(tipoocorrencia: ITipoOcorrencia): void {
    this.tipoocorrenciaService.excluir(tipoocorrencia.id).subscribe(() => { Swal.fire({
      title: 'Excluído com sucesso!',
      icon: 'success',
      confirmButtonColor: '#3085d6'
    }),
      this.carregarTipoOcorrencia();
    });
  }
}
