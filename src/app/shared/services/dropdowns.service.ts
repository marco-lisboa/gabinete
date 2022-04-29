import { IAssunto } from './../../modulos/cadastros/components/assuntos/listar-assuntos/model/IAssunto.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadosBr } from '../models/estados-br';
import { ICategoria } from 'src/app/modulos/cadastros/components/categoria/model/ICategoria.model';
import { Cidades } from '../models/Cidades';
import { ZonasRj } from '../models/zonas-rj';
import { IOrigem } from 'src/app/modulos/cadastros/components/listar-origem/model/IOrigem.interface';

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
    return this.http.get<Cidades[]>('../../../assets/dados/cidade.json').pipe
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

  getOrigens(): Observable<IOrigem[]> {
    return this.http.get<IOrigem[]>('http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/origens').pipe
    (map(res => res)
    );
  }

  getAssuntos(): Observable<IAssunto[]> {
    return this.http.get<IAssunto[]>('http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/assuntos').pipe
    (map(res => res)
    );
  }
}
