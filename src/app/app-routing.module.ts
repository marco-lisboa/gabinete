import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ContainerComponent } from './components/container/container.component';
import { RegistrarComponent } from './modulos/atendimento/components/registrar/registrar.component';
import { ContainerCadastrosComponent } from './modulos/cadastros/container/container-cadastros/container-cadastros.component';
import { AuthGaurd } from './shared/services/auth.gaurd';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'modulos',
    // canActivate: [AuthGaurd],
    component: ContainerComponent,
    loadChildren: () => import('./modulos/modulos.module').then(m => m.ModulosModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
  {
    path: 'modulos/cadastros',
    component: ContainerCadastrosComponent,
  },
  {
    path: 'modulos/atendimento/registrar',
    component: RegistrarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
