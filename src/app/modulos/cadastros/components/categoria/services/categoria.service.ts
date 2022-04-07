import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategoria } from '../model/ICategoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private URL: string = 'http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/categorias'

  constructor(private http: HttpClient) { }

  buscarTodos():Observable<ICategoria[]> {
      return this.http.get<ICategoria[]>(this.URL).pipe(
        map(retorno => retorno)
      );
  }

  buscarPorId(id: number): Observable<ICategoria> {
    return this.http.get<ICategoria>(`${this.URL}/${id}`);
  }

  cadastrar(categoria: ICategoria): Observable<ICategoria> {
    return this.http.post<ICategoria>(this.URL, categoria).pipe(
      map(retorno => retorno)
    );
  }

  editar(categoria: ICategoria): Observable<ICategoria> {
    return this.http.put<ICategoria>(`${this.URL}/${categoria.id}`, categoria).pipe(
      map(retorno => retorno)
    );
  }

  excluir(id: any): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno)
    );
  }
}
