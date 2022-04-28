import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadosBr } from '../models/estados-br';
import { ICategoria } from 'src/app/modulos/cadastros/components/categoria/model/ICategoria.model';
import { Cidades } from '../models/Cidades';
import { ZonasRj } from '../models/zonas-rj';

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

  getCidades(idEstado?: number): Observable<Cidades[]> {
    return this.http.get<Cidades[]>('../../../assets/dados/regiao.json').pipe
    (map((cidade: Cidades[]) => cidade.filter(c => c.estado == idEstado))
    );
  }

  getRegião(idCidade?: number): Observable<ZonasRj[]> {
    return this.http.get<ZonasRj[]>('../../../assets/dados/zonasrj.json').pipe
    (map((regioes: ZonasRj[]) => regioes.filter(r => r.cidade == idCidade))
    );
  }


  getCategorias(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>('http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/categorias').pipe
    (map(res => res)
    );
  }
}
