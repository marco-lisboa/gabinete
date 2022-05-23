import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  private URL: string = 'http://gabinetevirtual.us-east-1.elasticbeanstalk.com/api/v1/atendimentos/download1'

constructor(private http: HttpClient) { }

/*download(): Observable<any>{
  return this.http.get<any>(this.URL), {
    responseType: 'blob',
  };
}*/

}
