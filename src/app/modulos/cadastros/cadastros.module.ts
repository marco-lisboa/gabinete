import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCadastrosComponent } from './container/container-cadastros/container-cadastros.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrosRoutingModule } from './cadastros-routing.module';



@NgModule({
  declarations: [
    ContainerCadastrosComponent,
    CardMenuComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    CadastrosRoutingModule
  ]
})
export class CadastrosModule { }
