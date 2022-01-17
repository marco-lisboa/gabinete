import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  prefix: any
  constructor() {
  }


  saveByObjProps(obj: any): void {
    Object
      .entries(obj)
      .forEach(entry => {
        const [key, value] = entry;
        localStorage.setItem(key, value + '');
      });
  }

  getItem(key: string): any {
    return localStorage.getItem(key) ?? null
  }



  setItem(key: string, value: any) {
    return localStorage.setItem(key, value);
  }

  removeItems(keys: string[]): void {
    keys.forEach(key => localStorage.removeItem(key));
  }


}
