import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCadastrosComponent } from './container/container-cadastros/container-cadastros.component';
import { ListarAssuntosComponent } from './components/assuntos/listar-assuntos/listar-assuntos.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ListarOrigemComponent } from './components/listar-origem/listar-origem.component';
import { ListarPrazoComponent } from './components/listar-prazo/listar-prazo.component';
import { ListarTipoOcorrenciaComponent } from './components/listar-tipo-ocorrencia/listar-tipo-ocorrencia.component';
import { ListarOrgaoComponent } from './components/listar-orgao/listar-orgao.component';
import { AtualizarAssuntoComponent } from './components/assuntos/atualizar-assunto/atualizar-assunto.component';
import { AtualizarCategoriaComponent } from './components/categoria/atualizar-categoria/atualizar-categoria.component';
import { AtualizarOrigemComponent } from './components/listar-origem/atualizar-origem/atualizar-origem.component';
import { AtualizarTipoOcorrenciaComponent } from './components/listar-tipo-ocorrencia/atualizar-tipo-ocorrencia/atualizar-tipo-ocorrencia.component';
import { AtualizarPrazoComponent } from './components/listar-prazo/atualizar-prazo/atualizar-prazo.component';
import { AtualizarOrgaoComponent } from './components/listar-orgao/atualizar-orgao/atualizar-orgao.component';


const routes: Routes = [
  {
    path: 'cadastros',
    component: ContainerCadastrosComponent,
  },
  {
    path: 'cadastros/assuntos',
    component: ListarAssuntosComponent,
  },
  {
    path: 'cadastros/assuntos/editar/:id',
    component: AtualizarAssuntoComponent,
  },
  {
    path: 'cadastros/categoria',
    component: CategoriaComponent,
  },
  {
    path: 'cadastros/categoria/editar/:id',
    component: AtualizarCategoriaComponent,
  },
  {
    path: 'cadastros/origem',
    component: ListarOrigemComponent,
  },
  {
    path: 'cadastros/origem/editar/:id',
    component: AtualizarOrigemComponent,
  },
  {
    path: 'cadastros/prazo',
    component: ListarPrazoComponent,
  },
  {
    path: 'cadastros/prazo/editar/:id',
    component: AtualizarPrazoComponent,
  },
  {
    path: 'cadastros/tipo-ocorrencia',
    component: ListarTipoOcorrenciaComponent,
  },
  {
    path: 'cadastros/tipo-ocorrencia/editar/:id',
    component: AtualizarTipoOcorrenciaComponent,
  },
  {
    path: 'cadastros/orgao',
    component: ListarOrgaoComponent,
  },
  {
    path: 'cadastros/orgao/editar/:id',
    component: AtualizarOrgaoComponent,
  },
];

@NgModule({
  imports: [[RouterModule.forChild(routes)]],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
