import { Injectable, NgModule } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';


import { LocalStorageService } from './local-storage.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  controle = 0;
  urlBase: any;
  urlRequest: any;

  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private auth: AuthService,
  ) {
  }

  private handleAuthError(err: any) {
    if (err.status === 401) {
      this.auth.signout();
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers;

    const token = this.storage.getItem('token');

    this.urlBase = environment.url.split('/', 3);
    this.urlRequest = req.url.split('/', 3);



    if (token && this.urlRequest[2] == this.urlBase[2]) {
      headers = req.headers.set('Authorization', `${token}`);
    }

    if (req.url.includes('receipt')) {
      headers = req.headers.set('Accept', 'application/pdf');
    }

    const authReq = req.clone({ headers });
    return next.handle(authReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
        }
      }, error => {

        this.handleAuthError(error);
      })
    );
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
})
export class Interceptor {
}

