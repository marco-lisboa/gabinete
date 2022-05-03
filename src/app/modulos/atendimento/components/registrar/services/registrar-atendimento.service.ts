import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RegistrarAtendimento } from '../model/registrar-atendimento';

@Injectable({
  providedIn: 'root'
})
export class RegistrarAtendimentoService {

  private URL: string = 'http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/atendimentos'

constructor(private http: HttpClient) { }

cadastrar(registrar: RegistrarAtendimento): Observable<RegistrarAtendimento> {
    return this.http.post<RegistrarAtendimento>(this.URL, registrar).pipe(
      map(retorno => retorno)
    );
  }

}
