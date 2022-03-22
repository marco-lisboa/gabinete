import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCadastrosComponent } from './container/container-cadastros/container-cadastros.component';
import { ListarAssuntosComponent } from './components/assuntos/listar-assuntos/listar-assuntos.component';


const routes: Routes = [
  { 
    path: 'cadastros',
    component: ContainerCadastrosComponent,
  },
  {
    path: 'cadastros/assuntos',
    component: ListarAssuntosComponent,
  },
];

@NgModule({
  imports: [[RouterModule.forChild(routes)]],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
