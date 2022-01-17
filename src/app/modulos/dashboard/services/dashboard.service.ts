import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private request: RequestService,
  ) { }


  getAniversariantes() {
    return this.request.get('dashboard/aniversariantes');
  }
}
