import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCadastrosComponent } from './container/container-cadastros/container-cadastros.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { BoxComponent } from './components/box/box.component';
import { ListarAssuntosComponent } from './components/assuntos/listar-assuntos/listar-assuntos.component';
import { FormsModule } from '@angular/forms';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ListarOrigemComponent } from './components/listar-origem/listar-origem.component';
import { ListarAtuacaoComponent } from './components/listar-atuacao/listar-atuacao.component';
import { ListarPrazoComponent } from './components/listar-prazo/listar-prazo.component';
import { ListarTipoOcorrenciaComponent } from './components/listar-tipo-ocorrencia/listar-tipo-ocorrencia.component';
import { ListarOrgaoComponent } from './components/listar-orgao/listar-orgao.component';
import { HttpClientModule } from '@angular/common/http';
import { AtualizarAssuntoComponent } from './components/assuntos/atualizar-assunto/atualizar-assunto.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AtualizarCategoriaComponent } from './components/categoria/atualizar-categoria/atualizar-categoria.component';
import { AtualizarOrigemComponent } from './components/listar-origem/atualizar-origem/atualizar-origem.component';
import { AtualizarTipoOcorrenciaComponent } from './components/listar-tipo-ocorrencia/atualizar-tipo-ocorrencia/atualizar-tipo-ocorrencia.component';






@NgModule({
  declarations: [
    ContainerCadastrosComponent,
    BoxComponent,
    ListarAssuntosComponent,
    CategoriaComponent,
    ListarOrigemComponent,
    ListarAtuacaoComponent,
    ListarPrazoComponent,
    ListarTipoOcorrenciaComponent,
    ListarOrgaoComponent,
    AtualizarAssuntoComponent,
    AtualizarCategoriaComponent,
    AtualizarOrigemComponent,
    AtualizarTipoOcorrenciaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CadastrosRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ]
})
export class CadastrosModule { }
