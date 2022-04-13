import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrarComponent } from './components/registrar/registrar.component';


@NgModule({
  declarations: [
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AtendimentoRoutingModule
  ]
})
export class AtendimentoModule { }
