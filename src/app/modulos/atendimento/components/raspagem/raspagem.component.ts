import { DropdownsService } from 'src/app/shared/services/dropdowns.service';
import { Component, OnInit } from '@angular/core';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import { IAssunto } from 'src/app/modulos/cadastros/components/assuntos/listar-assuntos/model/IAssunto.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadosBr } from 'src/app/shared/models/estados-br';
import { Cidades } from 'src/app/shared/models/Cidades';
import { map, tap, switchMap, empty } from 'rxjs';
import { Bairros } from 'src/app/shared/models/bairros';

@Component({
  selector: 'app-raspagem',
  templateUrl: './raspagem.component.html',
  styleUrls: ['./raspagem.component.scss']
})


export class RaspagemComponent implements OnInit {
  dropdownList : any[];
  List : any[];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;
  dropdownSettingsList: IDropdownSettings;
  listarAssuntos: IAssunto[];
  listarEstados: EstadosBr[];
  listarCidade: Cidades[];
  listarBairro: Bairros[];
  form: FormGroup;

  cidade: Cidades[];
  bairro: Bairros[];

  constructor(
    private http: HttpClient,
    private dropdownsService: DropdownsService,
    private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.carregarEstados();
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
      { item_id: 218, item_text: 'Atuação 1' },
      { item_id: 219, item_text: 'Atuação 2' },
    ];
    this.dropdownSettingsList = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
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
  };



  initForm(){
    this.form = this.formBuilder.group({
      assuntos : ['', ],
      atuacao: [''],
      uf: [null],
      cidade: [null],
      idBairro: [null],
      idadeInicio: [null],
      idadeFim: [null],
      masculino: [false],
      feminino: [false],
      transgenero: [false],
      outros: [false]
    })
  }


  carregarEstados(): void {
    this.dropdownsService.getEstadosBr().subscribe(dados => {
      this.listarEstados = dados
    })
  }






  Submit(){
    console.log(this.form);

    if (this.form.valid) {
      this.http.post('https://httpbin.org/post', this.form.value)
      .subscribe((dados) => {
        console.log(dados);
        return
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
    this.http.get<any>('http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/assuntos').subscribe(data => {
      for(let i=0; i < data.length; i++) {
        tmp.push({ id: i, descricao: data[i].descricao });
      }
      this.dropdownList = tmp;
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

}

