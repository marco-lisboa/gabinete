import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AniversariosRoutingModule } from './aniversarios-routing.module';
import { ContainerAniversariosComponent } from './container/container-aniversarios/container-aniversarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { CardAniversariantesComponent } from './components/card-aniversariantes/card-aniversariantes.component';


@NgModule({
  declarations: [
    ContainerAniversariosComponent,
    CardMenuComponent,
    CardAniversariantesComponent,

    ],
  imports: [
    CommonModule,
    SharedModule,
    AniversariosRoutingModule
  ]
})
export class AniversariosModule { }
