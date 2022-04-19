import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtendimentoRoutingModule } from './atendimento-routing.module';



@NgModule({
  declarations: [
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AtendimentoRoutingModule
  ]
})
export class AtendimentoModule { }
