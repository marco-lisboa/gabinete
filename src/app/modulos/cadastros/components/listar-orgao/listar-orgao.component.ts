import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { IOrgao } from './model/IOrgao.interface';
import { OrgaoService } from './services/orgao.service';

@Component({
  selector: 'app-listar-orgao',
  templateUrl: './listar-orgao.component.html',
  styleUrls: ['./listar-orgao.component.scss']
})
export class ListarOrgaoComponent implements OnInit {

  listarOrgaos: IOrgao[] = [];

  orgao: IOrgao = {
    descricao: '',
    ativo: true
  }

  constructor(private orgaoService: OrgaoService) { }

  ngOnInit(): void {
    this.carregarOrgaos();
  }

  carregarOrgaos(): void {
    this.orgaoService.buscarTodos().subscribe(retorno => {
      this.listarOrgaos = retorno;
    });
    }

    cadastrarOrgao(): void {
      this.orgaoService.cadastrar(this.orgao).subscribe(retorno => {
      this.orgao =  retorno;
      this.carregarOrgaos();
      this.orgao.descricao = '';
      this.orgao.id = (0);
      });
    }

    deletar(orgao: IOrgao): void {
      this.orgaoService.excluir(orgao.id).subscribe(() => {
        Swal.fire({
          title: 'Excluído com sucesso!',
          icon: 'success',
          confirmButtonColor: '#3085d6'
        }),
        this.carregarOrgaos();
      });
    }

}
