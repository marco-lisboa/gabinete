import { RegistrarAtendimentoService } from './services/registrar-atendimento.service';
import { Anexo } from './../../../../shared/models/anexo';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { empty, map, switchMap, tap } from 'rxjs';
import { ICategoria } from 'src/app/modulos/cadastros/components/categoria/model/ICategoria.model';
import { EstadosBr } from 'src/app/shared/models/estados-br';
import { Cidades } from 'src/app/shared/models/Cidades';
import { DropdownsService } from 'src/app/shared/services/dropdowns.service';
import { ZonasRj } from 'src/app/shared/models/zonas-rj';
import { IOrigem } from 'src/app/modulos/cadastros/components/listar-origem/model/IOrigem.interface';
import { IAssunto } from 'src/app/modulos/cadastros/components/assuntos/listar-assuntos/model/IAssunto.model';
import { IPrazo } from 'src/app/modulos/cadastros/components/listar-prazo/model/IPrazo.interface';
import { IOrgao } from 'src/app/modulos/cadastros/components/listar-orgao/model/IOrgao.interface';
import { ITipoOcorrencia } from 'src/app/modulos/cadastros/components/listar-tipo-ocorrencia/model/ITipoOcorrencia.interface';
import { Bairros } from 'src/app/shared/models/bairros';
import Swal from 'sweetalert2';
import { RegistrarAtendimento } from './model/registrar-atendimento';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {
  formulario: FormGroup;
  listarEstados: EstadosBr[] ;
  listarCategorias: ICategoria[];
  listarOrigens: IOrigem[];
  listarAssuntos: IAssunto[];
  listarPrazos:IPrazo[];
  listarOrgaos:IOrgao[];
  listarTipos:ITipoOcorrencia[];
  listarAnexos:Anexo[];
  listarCidade: Cidades[];
  //listarRegiao: ZonasRj[];
  listarBairro: Bairros[];
  opcaoNaoListar = ['Emendas', 'Internas'];

  categoria: any[];
  origem: any[];
  assunto: any[];
  prazo: any[];
  orgao: any[];
  tipoocorrencia: any[];
  anexo: any[];
  estados: EstadosBr[];
  cidade: Cidades[];
  //regiao: ZonasRj[];
  bairro: Bairros[];
  atendimento: RegistrarAtendimento = {
    beneficiado: ''
  };




  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownsService: DropdownsService,
    private RegistrarAtendimentoService: RegistrarAtendimentoService) {
     }

  ngOnInit(): void {

    this.carregarEstados();
    this.carregarCategorias();
    this.carregarOrigens();
    this.carregarAssuntos();
    this.carregarCidades();
    //this.carregarRegiao();
    this.carregarBairro();
    this.carregarPrazos();
    this.carregarOrgaos();
    this.carregarTipoOcorrencia();
    this.carregarAnexo();


    this.formulario = this.formBuilder.group({
      //data: ['2022/04/20'],
      idCadastrado: [0],
      idBairroContato: [null],
      contato: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(11),
          Validators.pattern("([0-9]{2,3})?(\([0-9]{2}\))([0-9]{4,5})([0-9]{4})")
        ],
      ],
      logradouro: [null],
      uf: [null, Validators.required],
      cidade: [null, Validators.required],
      idBairro: [null, Validators.required],
      idRegiao: [2],
      numeroAtendimento: [null],
      dataInicioAtendimento: [null],
      dataFimAtendimento: [null],
      solicitante: [null],
      dataInicioOcorrencia: [null],
      dataFimOcorrencia: [null],
      codigo: [null],
      idCategoria: [null, Validators.required],
      status: [null, Validators.required],
      idOrigem: [null, Validators.required],
      idAtuacao: [null, Validators.required],
      idAssunto: [null, Validators.required],
      idCadastradoPor: [null, Validators.required],
      idPrazo: [null, Validators.required],
      dataPrazo: [null],
      idFinalizado: [null, Validators.required],
      //anexo: [null],
      idOcorrencia: [null, Validators.required],
      idResponsavelAtendimento: [null, Validators.required],
      idResponsavelOcorrencia: [null, Validators.required],
      numeroRap: [null],
      digitoRap: [null],
      numeroSimproc: [null],
      numeroSei: [null],
      numeroDocumento: [null],
      anoDocumento: [null],
      idOrgao: [null, Validators.required],
      tipoOcorrencia: [null],
      idRetornar: [null, Validators.required],
      solicitantes: [null],
      //opcaoNaoListar: this.buildOpcaoNaoListar(),
      beneficiado: [null],
      observacao: [null],
      descricao: [null]
    });



    this.formulario.get('uf')?.valueChanges
    .pipe(
      tap(estado => console.log('Novo Estado: ', estado)),
      map(estado => this.listarEstados.filter(e => e.sigla === estado)),
      map(estados => estados && estados.length > 0 ? estados[0].id: empty()),
      switchMap((estadoId) => this.dropdownsService.getCidades(Number(estadoId))),
      tap(console.log)
    )
      .subscribe(cidades => this.cidade = cidades);
    ;

    this.formulario.get('cidade')?.valueChanges
    .pipe(
      tap(cidade => console.log('Nova Cidade: ', cidade)),
      map(cidade => this.cidade.filter(c => c.nome === cidade)),
      map(cidades => cidades && cidades.length > 0 ? cidades[0].id: empty()),
      switchMap((cidadeId) => this.dropdownsService.getBairro(Number(cidadeId))),
      tap(console.log)
    )
    .subscribe(bairros => this.bairro = bairros);

    /*this.formulario.get('idRegiao')?.valueChanges
    .pipe(
      tap(regiao => console.log('Nova Região: ', regiao)),
      map(regiao => this.regiao.filter(r => r.nome === regiao)),
      map(regioes => regioes && regioes.length > 0 ? regioes[0].id: empty()),
      switchMap((regiaoId) => this.dropdownsService.getBairro(Number(regiaoId))),
      tap(console.log)
    )
    .subscribe(bairros => this.bairro = bairros);*/



  }
    //acaba OnInit

    /*buildOpcaoNaoListar() {
      const values = this.opcaoNaoListar.map(v => new FormControl(false));
      return this.formBuilder.array(values)
    }*/


  carregarEstados(): void {
    this.dropdownsService.getEstadosBr().subscribe(dados => {
      this.listarEstados = dados
    })
  }


  carregarCategorias(): void {
    this.dropdownsService.getCategorias().subscribe(dados => {
      this.listarCategorias = dados
    })
  }

  carregarOrigens(): void {
    this.dropdownsService.getOrigens().subscribe(dados => {
      this.listarOrigens = dados
    })
  }

  carregarAssuntos(): void {
    this.dropdownsService.getAssuntos().subscribe(dados => {
      this.listarAssuntos = dados
    })
  }

  carregarPrazos(): void {
    this.dropdownsService.getPrazos().subscribe(dados => {
      this.listarPrazos = dados
    })
  }

  carregarOrgaos(): void {
    this.dropdownsService.getOrgaos().subscribe(dados => {
      this.listarOrgaos = dados
    })
  }

  carregarTipoOcorrencia(): void {
    this.dropdownsService.getTipos().subscribe(dados => {
      this.listarTipos = dados
    })
  }

  carregarAnexo(): void {
    this.dropdownsService.getAnexos().subscribe(dados => {
      this.listarAnexos = dados
    })
  }

  carregarCidades(): void {
    this.dropdownsService.getCidades().subscribe(dados => {
      this.listarCidade = dados;
    })
  }

  /*carregarRegiao(): void {
    this.dropdownsService.getRegião().subscribe(dados => {
      this.regiao = dados;
    })
  }*/

  carregarBairro(): void {
    this.dropdownsService.getBairro().subscribe(dados => {
      this.bairro = dados;
    })
  }

  compararCategorias(obj1: { descricao: any; id: any;}, obj2: { descricao: any; id: any;}) {
    return obj1 && obj2 ?  (obj1.descricao === obj2.descricao && obj1.id === obj2.id) : obj1 === obj2;
  }

  compararOrigens(obj1: { descricao: any; id: any;}, obj2: { descricao: any; id: any;}) {
    return obj1 && obj2 ?  (obj1.descricao === obj2.descricao && obj1.id === obj2.id) : obj1 === obj2;
  }

  compararAssuntos(obj1: { descricao: any; id: any;}, obj2: { descricao: any; id: any;}) {
    return obj1 && obj2 ?  (obj1.descricao === obj2.descricao && obj1.id === obj2.id) : obj1 === obj2;
  }

  compararPrazos(obj1: { descricao: any; id: any;}, obj2: { descricao: any; id: any;}) {
    return obj1 && obj2 ?  (obj1.descricao === obj2.descricao && obj1.id === obj2.id) : obj1 === obj2;
  }

  compararOrgaos(obj1: { descricao: any; id: any;}, obj2: { descricao: any; id: any;}) {
    return obj1 && obj2 ?  (obj1.descricao === obj2.descricao && obj1.id === obj2.id) : obj1 === obj2;
  }

  compararTipos(obj1: { descricao: any; id: any;}, obj2: { descricao: any; id: any;}) {
    return obj1 && obj2 ?  (obj1.descricao === obj2.descricao && obj1.id === obj2.id) : obj1 === obj2;
  }

  compararAnexos(obj1: { descricao: any; id: any; }, obj2: { descricao: any; id: any; }) {
    return obj1 && obj2 ?  (obj1.descricao === obj2.descricao && obj1.id === obj2.id) : obj1 === obj2;
  }


  Submit() {
    console.log(this.formulario);

    /*
    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      opcaoNaoListar: valueSubmit.opcaoNaoListar
      .map( (v: any, i: any) => v ? this.opcaoNaoListar[i] : null)
      .filter((v: any) => v !== null)
    });*/

    //console.log(valueSubmit);

    if (this.formulario.valid) {
    this.http.post('http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/atendimentos', this.formulario.value)
    .subscribe((dados) => {
      console.log(dados);
    })
          //reseta o formulario
          //this.formulario.reset();
    } else {
      Swal.fire({
        title: "Preencha os campos obrigatórios!!!",
        icon: "error"
      });
      Object.keys(this.formulario.controls).forEach(campo => {
        console.log(campo);
        const controle = this.formulario.get(campo);
        controle?.markAsTouched();
      });
    }
  }



  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
    );
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }

  getFrameworksControls() {
    return this.formulario.get('opcaoNaoListar') ? (<FormArray>this.formulario.get('opcaoNaoListar')).controls : null;
  }

}
