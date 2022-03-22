import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './components/container/container.component';
import { SharedModule } from './shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CadastrosRoutingModule } from './modulos/cadastros/cadastros-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    CardMenuComponent,
    AuthComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    TabsModule.forRoot(),
    CadastrosRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
