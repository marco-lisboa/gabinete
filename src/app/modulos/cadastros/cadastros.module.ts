import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCadastrosComponent } from './container/container-cadastros/container-cadastros.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { BoxComponent } from './components/box/box.component';
import { ListarAssuntosComponent } from './components/assuntos/listar-assuntos/listar-assuntos.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ContainerCadastrosComponent,
    BoxComponent,
    ListarAssuntosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CadastrosRoutingModule,
    FormsModule
  ]
})
export class CadastrosModule { }
