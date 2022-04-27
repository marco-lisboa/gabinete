import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      contato: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(11)]],
      logradouro: [null, Validators.required],
      cidade: [null],
      bairro: [null],
      uf: [null],
      regiao: [null],
      bairrob: [null]
    })
  }

   Submit() {
    console.log(this.formulario);

    this.http
    .post('https://httpbin.org/post', JSON.stringify({}))
    .subscribe(dados => {
      console.log(this.formulario.value);
      console.log(dados);
      //reseta o formulario
      this.formulario.reset();
    });
    }

    verificaValidTouched(campo: string){
     return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
    }

    aplicaCssErro(campo: string){
      return {
        'has-error': this.verificaValidTouched(campo),
        'has-feedback': this.verificaValidTouched(campo)
      }
    }
  }


