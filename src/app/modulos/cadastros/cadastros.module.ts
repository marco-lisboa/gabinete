import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCadastrosComponent } from './container/container-cadastros/container-cadastros.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { BoxComponent } from './components/box/box.component';



@NgModule({
  declarations: [
    ContainerCadastrosComponent,
    CardMenuComponent,
    BoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CadastrosRoutingModule,
  ]
})
export class CadastrosModule { }
