import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  {
    path: 'atendimento/registrar',
    component: RegistrarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
