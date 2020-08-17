import { MensagemErroComponent } from './eventos/mensagem-erro/mensagem-erro.component';
import { EventosModule } from './eventos/eventos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from "@angular/fire";
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MensagemErroComponent
  ],
  imports: [
    BrowserModule,
    EventosModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
