import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerDashboardComponent } from './container/container-dashboard/container-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardAniversariantesComponent } from './components/card-aniversariantes/card-aniversariantes.component';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    ContainerDashboardComponent,
    CardAniversariantesComponent,
    CardTaskComponent,
    CardMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
