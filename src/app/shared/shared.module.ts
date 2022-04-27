import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { RequestService } from './services/request.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';



const BSMODULES = [
  ReactiveFormsModule,
  HttpClientModule,
  CommonModule
];



@NgModule({
  declarations: [
  ],
  providers: [
    RequestService,
    LocalStorageService,
    AuthService,
  ],
  imports: [
    ...BSMODULES,
  ],
  exports: [
    ...BSMODULES,

  ]
})
export class SharedModule { }
