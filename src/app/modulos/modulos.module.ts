import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AniversariosModule } from './aniversarios/aniversarios.module';
import { CadastrosModule } from './cadastros/cadastros.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DashboardModule,
    AniversariosModule,
    CadastrosModule,
  ]
})
export class ModulosModule { }
