import { DropdownsService } from 'src/app/shared/services/dropdowns.service';
import { Component, OnInit } from '@angular/core';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import { IAssunto } from 'src/app/modulos/cadastros/components/assuntos/listar-assuntos/model/IAssunto.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-raspagem',
  templateUrl: './raspagem.component.html',
  styleUrls: ['./raspagem.component.scss']
})


export class RaspagemComponent implements OnInit {
  dropdownList : any[];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;
  listarAssuntos: IAssunto[];
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private dropdownsService: DropdownsService,
    private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.initForm();
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
  }

  initForm(){
    this.form = this.formBuilder.group({
      assuntos : ['', Validators.required],
    })
  }

  handleButton(){
    console.log('reactive form value', this.form.value);
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
