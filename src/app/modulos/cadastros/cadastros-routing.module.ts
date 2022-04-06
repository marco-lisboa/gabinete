import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCadastrosComponent } from './container/container-cadastros/container-cadastros.component';
import { ListarAssuntosComponent } from './components/assuntos/listar-assuntos/listar-assuntos.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ListarAtuacaoComponent } from './components/listar-atuacao/listar-atuacao.component';
import { ListarOrigemComponent } from './components/listar-origem/listar-origem.component';
import { ListarPrazoComponent } from './components/listar-prazo/listar-prazo.component';
import { ListarTipoOcorrenciaComponent } from './components/listar-tipo-ocorrencia/listar-tipo-ocorrencia.component';
import { ListarOrgaoComponent } from './components/listar-orgao/listar-orgao.component';
import { AtualizarAssuntoComponent } from './components/assuntos/atualizar-assunto/atualizar-assunto.component';


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
    path: 'cadastros/atuacao',
    component: ListarAtuacaoComponent,
  },
  {
    path: 'cadastros/origem',
    component: ListarOrigemComponent,
  },
  {
    path: 'cadastros/prazo',
    component: ListarPrazoComponent,
  },
  {
    path: 'cadastros/tipo-ocorrencia',
    component: ListarTipoOcorrenciaComponent,
  },
  {
    path: 'cadastros/orgao',
    component: ListarOrgaoComponent,
  },
];

@NgModule({
  imports: [[RouterModule.forChild(routes)]],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
