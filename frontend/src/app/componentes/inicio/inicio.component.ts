import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component'; 
import { ModificarComponent } from '../modificar/modificar.component';
import { HeaderComponent } from '../header/header.component';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    HeaderComponent,
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
