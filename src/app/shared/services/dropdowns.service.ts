import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadosBr } from '../models/estados-br';
import { ICategoria } from 'src/app/modulos/cadastros/components/categoria/model/ICategoria.model';
import { RegiãoRJ } from '../models/RegiãoRJ';

@Injectable({
  providedIn: 'root'
})
export class DropdownsService {


  constructor(private http: HttpClient) { }

  getEstadosBr(): Observable<EstadosBr[]> {
    return this.http.get<EstadosBr[]>('../../../assets/dados/estadosbr.json').pipe
    (map(res => res)
    );
  }

  getRegiaoRj(idEstado?: number): Observable<RegiãoRJ[]> {
    return this.http.get<RegiãoRJ[]>('../../../assets/dados/regiao.json').pipe
    (map((região: RegiãoRJ[]) => região.filter(r => r.estado == idEstado))
    );
  }

  getCategorias(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>('http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/categorias').pipe
    (map(res => res)
    );
  }
}
