import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    HeaderComponent,
    ModificarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
