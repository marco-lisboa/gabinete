import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './components/listagem/listagem.component';
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
  {
    path: 'atendimento/listagem',
    component: ListagemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
