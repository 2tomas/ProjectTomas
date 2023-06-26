import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { TerminosYCondicionesComponent } from './components/terminos-y-condiciones/terminos-y-condiciones.component';
import { NotfoundComponent } from './components/not-found/not-found.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JuegosComponent } from './components/juegos/juegos.component';
import { JuegoComponent } from './components/juego/juego.component';
import { PrecioPipe } from './pipes/precio.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NombrePipe } from './pipes/nombre.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingUpComponent,
    TerminosYCondicionesComponent,
    NotfoundComponent,
    InicioComponent,
    JuegosComponent,
    JuegoComponent,
    PrecioPipe,
    NombrePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
