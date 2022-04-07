import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAssunto } from '../model/IAssunto.model';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})

export class AssuntosService {

  private URL: string = 'http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/assuntos';

  constructor(private http: HttpClient, private toastr: ToastrService) { }



   buscarTodos(): Observable<IAssunto[]> {
    return this.http.get<IAssunto[]>(this.URL).pipe(
      map(retorno => retorno)
    );
  }

  buscarPorId(id: number): Observable<IAssunto> {
    return this.http.get<IAssunto>(`${this.URL}/${id}`);
  }

  cadastrar(assunto: IAssunto): Observable<IAssunto> {
    return this.http.post<IAssunto>(this.URL, assunto).pipe(
      map(retorno => retorno)
    );
  }

  editar(assunto: IAssunto): Observable<IAssunto> {
    return this.http.put<IAssunto>(`${this.URL}/${assunto.id}`, assunto).pipe(
      map(retorno => retorno)
    );
  }

  excluir(id: any): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno)
    );
  }
}
