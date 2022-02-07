import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AniversariosModule } from './aniversarios/aniversarios.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    AniversariosModule
  ]
})
export class ModulosModule { }
