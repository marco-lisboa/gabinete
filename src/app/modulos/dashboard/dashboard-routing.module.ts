import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerDashboardComponent } from './container/container-dashboard/container-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ContainerDashboardComponent,
  },
];

@NgModule({
  imports: [[RouterModule.forChild(routes)]],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
