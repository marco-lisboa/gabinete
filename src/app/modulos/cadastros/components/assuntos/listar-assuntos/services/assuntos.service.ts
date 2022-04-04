import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAssunto } from '../model/IAssunto.model';

@Injectable({
  providedIn: 'root'
})
export class AssuntosService {

  private URL: string = 'http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/assuntos';

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<IAssunto[]> {
    return this.http.get<IAssunto[]>(this.URL);
  }
}
