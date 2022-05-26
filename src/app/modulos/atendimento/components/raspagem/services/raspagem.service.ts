import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaspagemService {

  constructor(private http: HttpClient) { }

  download(url: string, body: any) {
    return this.http.post(url, body,  {
      responseType: 'blob' as 'json'
    })
  }
}
