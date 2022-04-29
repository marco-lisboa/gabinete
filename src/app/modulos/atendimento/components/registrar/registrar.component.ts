import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empty, map, switchMap, tap } from 'rxjs';
import { ICategoria } from 'src/app/modulos/cadastros/components/categoria/model/ICategoria.model';
import { EstadosBr } from 'src/app/shared/models/estados-br';
import { Cidades } from 'src/app/shared/models/Cidades';
import { DropdownsService } from 'src/app/shared/services/dropdowns.service';
import { ZonasRj } from 'src/app/shared/models/zonas-rj';
import { IOrigem } from 'src/app/modulos/cadastros/components/listar-origem/model/IOrigem.interface';
import { IAssunto } from 'src/app/modulos/cadastros/components/assuntos/listar-assuntos/model/IAssunto.model';

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
  listarCidade: Cidades[];
  listarRegião: ZonasRj[];

  categoria: any[];
  origem: any[];
  assunto: any[];
  estados: EstadosBr[];
  cidade: Cidades[];
  regiao: ZonasRj[];

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownsService: DropdownsService) {}

  ngOnInit(): void {
    this.carregarEstados();
    this.carregarCategorias();
    this.carregarOrigens();
    this.carregarAssuntos();
    this.carregarCidades();
    this.carregarRegiao();


    this.formulario = this.formBuilder.group({
      contato: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.pattern("([0-9]{2,3})?(\([0-9]{2}\))([0-9]{4,5})([0-9]{4})")
        ],
      ],
      logradouro: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade2: [null, Validators.required],
      uf: [null],
      cidade: [null, Validators.required],
      regiao: [null],
      bairrob: [null],
      natendimento: [null],
      dataInicioAtendimento: [null],
      dataFimAtendimento: [null],
      solicitante: [null],
      dataInicioOcorrencia: [null],
      dataFimOcorrencia: [null],
      codigo: [null],
      categoria: [null],
      origem: [null],
      assunto: [null],
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
      switchMap((cidadeId) => this.dropdownsService.getRegião(Number(cidadeId))),
      tap(console.log)
    )
    .subscribe(regioes => this.regiao = regioes);

  }
    //acaba OnInit

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

  carregarCidades(): void {
    this.dropdownsService.getCidades().subscribe(dados => {
      this.listarCidade = dados;
    })
  }

  carregarRegiao(): void {
    this.dropdownsService.getRegião().subscribe(dados => {
      this.regiao = dados;
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
