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
    ListarOrgaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CadastrosRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CadastrosModule { }
