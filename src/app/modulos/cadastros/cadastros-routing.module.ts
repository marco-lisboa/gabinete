import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCadastrosComponent } from './container/container-cadastros/container-cadastros.component';

const routes: Routes = [
  { 
    path: 'cadastros',
    component: ContainerCadastrosComponent,
  }
];

@NgModule({
  imports: [[RouterModule.forChild(routes)]],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
