import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaspagemComponent } from './components/raspagem/raspagem.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  {
    path: 'atendimento/registrar',
    component: RegistrarComponent,
  },
  {
    path: 'atendimento/raspagem',
    component: RaspagemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
