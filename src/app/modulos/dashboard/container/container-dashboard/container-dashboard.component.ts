import { Component, OnInit } from '@angular/core';
import { Aniversariantes } from '../../models/dashboard.interface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-container-dashboard',
  templateUrl: './container-dashboard.component.html',
  styleUrls: ['./container-dashboard.component.scss']
})
export class ContainerDashboardComponent implements OnInit {
  aniversariantes: Aniversariantes[];
  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.getAniversariantes();
  }

  getAniversariantes() {
    return this.service.getAniversariantes().subscribe((res: Aniversariantes[]) => {
      this.aniversariantes = res;
      console.log(res)
    }, err => {
      console.log(err);
    });
  }

}
