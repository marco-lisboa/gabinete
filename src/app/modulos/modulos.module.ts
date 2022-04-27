import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AniversariosModule } from './aniversarios/aniversarios.module';
import { CadastrosModule } from './cadastros/cadastros.module';
import { AtendimentoModule } from './atendimento/atendimento.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DashboardModule,
    AniversariosModule,
    CadastrosModule,
    AtendimentoModule,
    SharedModule
  ]
})
export class ModulosModule { }
