import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, tap } from 'rxjs';
import { ICategoria } from 'src/app/modulos/cadastros/components/categoria/model/ICategoria.model';
import { EstadosBr } from 'src/app/shared/models/estados-br';
import { DropdownsService } from 'src/app/shared/services/dropdowns.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {
  formulario: FormGroup;
  listarEstados: EstadosBr[] = [];
  listarCategorias: ICategoria[] = [];

  categoria: any[];

  estados: EstadosBr = {
    id: '',
    sigla: '',
    nome: ''
  }

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownsService: DropdownsService) {}

  ngOnInit(): void {

    this.carregarEstados();

    this.carregarCategorias();

    this.formulario = this.formBuilder.group({
      contato: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(11),
        ],
      ],
      logradouro: [null, Validators.required],
      cidade: [null],
      bairro: [null],
      uf: [null],
      regiao: [null],
      bairrob: [null],
      categoria: [null]
    });
  }

  carregarEstados(): void {
    this.dropdownsService.getEstadosBr().subscribe(dados => {
      this.listarEstados = dados;
      console.log(dados);
    })
  }

  carregarCategorias(): void {
    this.dropdownsService.getCategorias().subscribe(dados => {
      this.listarCategorias = dados;
      console.log(dados);
    })
  }

  compararCategorias(obj1: { descricao: any; id: any;}, obj2: { descricao: any; id: any;}) {
    return obj1 && obj2 ?  (obj1.descricao === obj2.descricao && obj1.id === obj2.id) : obj1 === obj2;
  }

  Submit() {
    console.log(this.formulario);

    if (this.formulario.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify({}))
        .subscribe((dados) => {
          console.log(this.formulario.value);
          console.log(dados);
          //reseta o formulario
          //this.formulario.reset();
        });
    } else {
      console.log('formulario invalido');
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
}
