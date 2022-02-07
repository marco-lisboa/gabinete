import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerAniversariosComponent } from './container/container-aniversarios/container-aniversarios.component'; 

const routes: Routes = [
  { 
    path: 'aniversarios',
    component: ContainerAniversariosComponent
  }
];

@NgModule({
  imports: [[RouterModule.forChild(routes)]],
  exports: [RouterModule]
})
export class AniversariosRoutingModule { }
