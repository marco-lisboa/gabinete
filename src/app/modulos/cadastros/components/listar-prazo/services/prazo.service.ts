import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPrazo } from '../model/IPrazo.interface';

@Injectable({
  providedIn: 'root'
})
export class PrazoService {

private URL: string = 'http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/prazos'


  constructor(private http: HttpClient) { }

  buscarTodos():Observable<IPrazo[]> {
    return this.http.get<IPrazo[]>(this.URL).pipe(
      map(retorno => retorno)
    );
  }

  buscarPorId(id: number): Observable<IPrazo> {
    return this.http.get<IPrazo>(`${this.URL}/${id}`);
  }


  cadastrar(prazo: IPrazo): Observable<IPrazo> {
    return this.http.post<IPrazo>(this.URL, prazo).pipe(
      map(retorno => retorno)
    );
}

  editar(prazo: IPrazo): Observable<IPrazo> {
    return this.http.put<IPrazo>(`${this.URL}/${prazo.id}`, prazo).pipe(
      map(retorno => retorno)
    );
  }

  excluir(id: any): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno)
    );
  }

}
