import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrigem } from '../model/IOrigem.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrigemService {

  private URL: string = 'http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/origens'

  constructor(private http: HttpClient) { }

  buscarTodos():Observable<IOrigem[]> {
    return this.http.get<IOrigem[]>(this.URL).pipe(
      map(retorno => retorno)
    );
}

  buscarPorId(id: number): Observable<IOrigem> {
    return this.http.get<IOrigem>(`${this.URL}/${id}`);
  }


  cadastrar(origem: IOrigem): Observable<IOrigem> {
    return this.http.post<IOrigem>(this.URL, origem).pipe(
      map(retorno => retorno)
    );
}

  editar(origem: IOrigem): Observable<IOrigem> {
    return this.http.put<IOrigem>(`${this.URL}/${origem.id}`, origem).pipe(
      map(retorno => retorno)
    );
  }

  excluir(id: any): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno)
    );
}
}
