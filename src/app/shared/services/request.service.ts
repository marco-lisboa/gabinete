import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of as just } from 'rxjs';


import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class RequestService {

  url: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.url = environment.url;
  }

  delete(endpoint: string, params: object = {}, header?: HttpHeaders): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}${endpoint}`, { params: this.getParams(params), headers: header });
  }

  get(endpoint: string, params: object = {}, header?: HttpHeaders): Observable<any> {
    return this.httpClient.get<any>(`${this.url}${endpoint}`, { params: this.getParams(params), headers: header });
  }

  getOut(endpoint: string, params: object = {}, header?: HttpHeaders): Observable<any> {
    return this.httpClient.get<any>(`${endpoint}`);
  }

  post(endpoint: string, body: object = {}, header?: HttpHeaders): Observable<any> {
    return this.httpClient.post<any>(`${this.url}${endpoint}`, body, { headers: header });
  }

  put(endpoint: string, body: object = {}, header?: HttpHeaders): Observable<any> {
    return this.httpClient.put<any>(`${this.url}${endpoint}`, body, { headers: header });
  }

  private getParams(obj: object): HttpParams {
    return Object.entries(obj)
      .reduce((params, [key, value]) =>
        params.set(key, `${value}`)
        , new HttpParams());
  }
}
