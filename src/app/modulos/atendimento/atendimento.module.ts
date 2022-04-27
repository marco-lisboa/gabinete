import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CampoControlErroComponent } from 'src/app/shared/campo-control-erro/campo-control-erro.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RegistrarComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AtendimentoRoutingModule,
    HttpClientModule
  ]
})
export class AtendimentoModule { }
