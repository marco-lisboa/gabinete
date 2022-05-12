import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAssunto } from 'src/app/modulos/cadastros/components/assuntos/listar-assuntos/model/IAssunto.model';

@Injectable({
  providedIn: 'root'
})
export class RaspagemService {

constructor(private http: HttpClient) { }

getAssuntos(): Observable<IAssunto[]> {
  return this.http.get<IAssunto[]>('http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/assuntos').pipe
  (map(res => res)
  );
}

}
