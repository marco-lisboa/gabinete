import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable, EMPTY, throwError, Subject } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  login: string;
  codigoEnvio: string;

  _userActionOccured: Subject<void> = new Subject();
  get userActionOccured(): Observable<void> { return this._userActionOccured.asObservable() };

  constructor(
    private router: Router,
    private http: RequestService,
    private storage: LocalStorageService
  ) { }

  checkAuth() {
    if (this.storage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  getuser() {
    return of({});
  }

  signin(credentials: any): Observable<any> {
    return this.http.post(`/login/autenticar`, credentials);
    // .pipe(map(data => data),

    //   map((res) => {
    //     return res;

    //   }),
    //   catchError((e) => {
    //     if (e) {
    //       return throwError(e.error);
    //     }

    //   }));
  }

  signup(registro: any): Observable<any> {
    return this.http.post('register', registro);
  }

  updateSignup(credentials: any, id: any): Observable<any> {
    return this.http.put(`user/${id}/complete-registration`, credentials);
  }

  signout() {
    this.storage.removeItems(['token', 'user']);
    this.router.navigateByUrl('/login');
  }

  recuperarSenha(params: any) {
    this.login = params;
    return this.http.post(`/usuario/gerar-nova-senha/${params}`);
  }
  virificarCodigo(codigo: any) {
    this.codigoEnvio = codigo;
    return this.http.post(`/usuario/gerar-nova-senha/${this.login}/${codigo}`);
  }

  alterarSenha(params: any) {
    return this.http.post(`/usuario/gerar-nova-senha/${this.login}/${this.codigoEnvio}`, params);
  }





  notifyUserAction() {
    this._userActionOccured.next();
  }

  loginUser() {
    console.log('user login');
  }

  logOutUser() {
    console.log('user logout');
  }
}
