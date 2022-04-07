import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IOrgao } from '../model/IOrgao.interface';

@Injectable({
  providedIn: 'root'
})
export class OrgaoService {

private URL: string = 'http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/orgaos'


constructor(private http: HttpClient) { }

buscarTodos():Observable<IOrgao[]> {
  return this.http.get<IOrgao[]>(this.URL).pipe(
    map(retorno => retorno)
  );
}

buscarPorId(id: number): Observable<IOrgao> {
  return this.http.get<IOrgao>(`${this.URL}/${id}`);
}


cadastrar(orgao: IOrgao): Observable<IOrgao> {
  return this.http.post<IOrgao>(this.URL, orgao).pipe(
    map(retorno => retorno)
  );
}

editar(orgao: IOrgao): Observable<IOrgao> {
  return this.http.put<IOrgao>(`${this.URL}/${orgao.id}`, orgao).pipe(
    map(retorno => retorno)
  );
}

excluir(id: any): Observable<any> {
  return this.http.delete<any>(`${this.URL}/${id}`).pipe(
    map(retorno => retorno)
  );
}

}
