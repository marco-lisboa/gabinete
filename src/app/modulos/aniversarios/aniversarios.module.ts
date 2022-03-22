import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AniversariosRoutingModule } from './aniversarios-routing.module';
import { ContainerAniversariosComponent } from './container/container-aniversarios/container-aniversarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardAniversariantesComponent } from './components/card-aniversariantes/card-aniversariantes.component';


@NgModule({
  declarations: [
    ContainerAniversariosComponent,
    CardAniversariantesComponent,
    ],
  imports: [
    CommonModule,
    SharedModule,
    AniversariosRoutingModule
  ]
})
export class AniversariosModule { }
