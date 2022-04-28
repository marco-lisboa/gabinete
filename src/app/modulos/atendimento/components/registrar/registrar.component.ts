import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empty, map, switchMap, tap } from 'rxjs';
import { ICategoria } from 'src/app/modulos/cadastros/components/categoria/model/ICategoria.model';
import { EstadosBr } from 'src/app/shared/models/estados-br';
import { RegiãoRJ } from 'src/app/shared/models/RegiãoRJ';
import { DropdownsService } from 'src/app/shared/services/dropdowns.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {
  formulario: FormGroup;
  listarEstados: EstadosBr[] ;
  listarCategorias: ICategoria[];
  listarRegiao: RegiãoRJ[];

  categoria: any[];
  estados: EstadosBr[];
  regiao: RegiãoRJ[];

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownsService: DropdownsService) {}

  ngOnInit(): void {
    this.carregarEstados();
    this.carregarCategorias();
    this.carregarRegiao();


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
      regiao: [null, Validators.required],
      bairrob: [null],
      categoria: [null],
    });

    this.formulario.get('uf')?.valueChanges
    .pipe(
      tap(estado => console.log('Novo Estado: ', estado)),
      map(estado => this.listarEstados.filter(e => e.sigla === estado)),
      map(estados => estados && estados.length > 0 ? estados[0].id: empty()),
      switchMap((estadoId) => this.dropdownsService.getRegiaoRj(Number(estadoId))),
    )
      .subscribe(regiao => this.regiao = regiao);
    ;

  }


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

  carregarRegiao(): void {
    this.dropdownsService.getRegiaoRj().subscribe(dados => {
      this.listarRegiao = dados;
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
