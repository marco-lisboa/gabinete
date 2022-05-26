import { FileServiceService } from 'src/app/shared/services/file-service.service';
import { DropdownsService } from 'src/app/shared/services/dropdowns.service';
import { Component, OnInit } from '@angular/core';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import { IAssunto } from 'src/app/modulos/cadastros/components/assuntos/listar-assuntos/model/IAssunto.model';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadosBr } from 'src/app/shared/models/estados-br';
import { Cidades } from 'src/app/shared/models/Cidades';
import { map, tap, switchMap, empty } from 'rxjs';
import { Bairros } from 'src/app/shared/models/bairros';
import { RaspagemService } from './services/raspagem.service';

@Component({
  selector: 'app-raspagem',
  templateUrl: './raspagem.component.html',
  styleUrls: ['./raspagem.component.scss']
})


export class RaspagemComponent implements OnInit {
  dropdownList : any[];
  List : [
  { id: 218, descricao: 'Atuação 1' },
  { id: 219, descricao: 'Atuação 2' },
  ];
  idField : any[];
  dropdownSettings: IDropdownSettings;
  dropdownSettingsList: IDropdownSettings;
  listarAssuntos: IAssunto[];
  listarEstados: EstadosBr[];
  listarCidade: Cidades[];
  listarBairro: Bairros[];
  atuacao = [];
  genero = [
   { nome:'m', descricao: 'Masculino'},
   { nome:'f', descricao: 'Feminino'},
   { nome:'t', descricao: 'Transgênero'},
   { nome:'o', descricao: 'Outros'},
    ];
  form: FormGroup;

  cidade: Cidades[];
  bairro: Bairros[];

  constructor(
    private http: HttpClient,
    private dropdownsService: DropdownsService,
    private raspagemService: RaspagemService,
    private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.carregarEstados();
    this.carregarBairro();
   // this.handleValueChanges();
    this.getData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'descricao',
      selectAllText: 'Selecionar tudo',
      unSelectAllText: 'Desmarcar tudo',
      searchPlaceholderText: 'Pesquisar',
      itemsShowLimit: 27,
      allowSearchFilter: true
    };
    this.List = [
      { id: 218, descricao: 'Atuação 1' },
      { id: 219, descricao: 'Atuação 2' },
    ];
    this.dropdownSettingsList = {
      singleSelection: false,
      idField: 'id',
      textField: 'descricao',
      selectAllText: 'Selecionar tudo',
      unSelectAllText: 'Desmarcar tudo',
      searchPlaceholderText: 'Pesquisar',
      itemsShowLimit: 27,
      allowSearchFilter: true
    };




    this.form.get('uf')?.valueChanges
    .pipe(
      tap(estado => console.log('Novo Estado: ', estado)),
      map(estado => this.listarEstados.filter(e => e.sigla === estado)),
      map(estados => estados && estados.length > 0 ? estados[0].id: empty()),
      switchMap((estadoId) => this.dropdownsService.getCidades(Number(estadoId))),
      tap(console.log)
    )
      .subscribe(cidades => this.cidade = cidades);

      this.form.get('cidade')?.valueChanges
    .pipe(
      tap(cidade => console.log('Nova Cidade: ', cidade)),
      map(cidade => this.cidade.filter(c => c.nome === cidade)),
      map(cidades => cidades && cidades.length > 0 ? cidades[0].id: empty()),
      switchMap((cidadeId) => this.dropdownsService.getBairro(Number(cidadeId))),
      tap(console.log)
    )
    .subscribe(bairros => this.bairro = bairros);
      //console.log(this.bairro);
    };

    //.id

    initForm(){
      this.form = this.formBuilder.group({
      idAtuacao: [[]],
      idAssunto: [[]],
      uf: [null],
      cidade: [null],
      idBairro: [""],
      menorQ: [""],
      maiorQ: [""],
      genero: this.buildGeneros()
    })
  }

  buildGeneros() {
    const values = this.genero.map(v => new FormControl(false))
    return this.formBuilder.array(values);
  }



  carregarEstados(): void {
    this.dropdownsService.getEstadosBr().subscribe(dados => {
      this.listarEstados = dados
    })
  }

  carregarBairro(): void {
    this.dropdownsService.getBairro().subscribe(dados => {
      this.bairro = dados;
    })
  }

  /*compararCidades(obj1: { nome: any; id: any; idUf: any; uf: any}, obj2: { nome: any; id: any; idUf: any; uf: any}) {
    return obj1 && obj2 ?  (obj1.nome === obj2.nome && obj1.id === obj2.id && obj1.idUf === obj2.idUf && obj1.uf === obj2.uf) : obj1 === obj2;
  }*/

 /*handleValueChanges() {
   this.form.get('atuacao')?.valueChanges.
 }*/



  OnSubmit(){
    console.log(this.form);
    //const cusIds=this.List.map(item => item.id);

    let valueSubmit = Object.assign({}, this.form.value);



    valueSubmit = Object.assign({}, valueSubmit, {
      genero: valueSubmit.genero
      .map((v: any, i: any) => v ? this.genero[i].nome : null)
      .filter((v: any, i: any) => v !== null),
      idAssunto: valueSubmit.idAssunto
      .map((v: any, i: any) => v ? this.dropdownList[i].id : null)
      .filter((v: any, i: any) => v !== null),
      idAtuacao: valueSubmit.idAtuacao
      .map((v: any, i: any) => v ? this.List[i].id : null)
      .filter((v: any, i: any) => v !== null),
    });

  console.log(valueSubmit)

    if (this.form.valid) {
      /*this.http.post('http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/atendimentos/buscar', valueSubmit)
      .subscribe((dados) => {
        console.log(dados);*/
        this.raspagemService.download('http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/atendimentos/download1', valueSubmit)
        .subscribe((res: any) => {
          const file = new Blob([res], {
           type: res.type
          });

          const blob = window.URL.createObjectURL(file);

          const link = document.createElement('a')
          link.href = blob;
          link.download = 'RelatórioDeAtendimentos.txt';

          link.click();

          window.URL.revokeObjectURL(blob);
          link.remove();
        })

      } else {
        Object.keys(this.form.controls).forEach(campo => {
          console.log(campo);
          const controle = this.form.get(campo);
          controle?.markAsTouched();
        });
      }
  }

  getData(): void {
    let tmp: { id: number; descricao: any; }[] = [];
    this.http.get<any>('http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/assuntos')
    .subscribe(data => {
      for(let i=0; i < data.length; i++) {
        tmp.push({ id: i, descricao: data[i].descricao });
      }
      this.dropdownList = tmp;
    });
  }

   onItemSelect(item: any) {
           item = item.id;
            console.log('onItemSelect', item.id);
        }

    getGenerosControls() {
      return this.form.get('genero') ? (<FormArray>this.form.get('genero')).controls : null;
    }
}

//https://httpbin.org/post
//http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/atendimentos/buscar
