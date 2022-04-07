import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITipoOcorrencia } from '../model/ITipoOcorrencia.interface';

@Injectable({
  providedIn: 'root'
})
export class TipoOcorrenciaService {

  private URL: string = 'http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/tipoocorrencias'

  constructor(private http: HttpClient) { }

  buscarTodos():Observable<ITipoOcorrencia[]> {
    return this.http.get<ITipoOcorrencia[]>(this.URL).pipe(
      map(retorno => retorno)
    );
}

buscarPorId(id: number): Observable<ITipoOcorrencia> {
  return this.http.get<ITipoOcorrencia>(`${this.URL}/${id}`);
}

  cadastrar(tipoocorrencia: ITipoOcorrencia): Observable<ITipoOcorrencia> {
    return this.http.post<ITipoOcorrencia>(this.URL, tipoocorrencia).pipe(
      map(retorno => retorno)
    );
  }

  editar(tipoocorrencia: ITipoOcorrencia): Observable<ITipoOcorrencia> {
    return this.http.put<ITipoOcorrencia>(`${this.URL}/${tipoocorrencia.id}`, tipoocorrencia).pipe(
      map(retorno => retorno)
    );
  }
}
