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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { JuegoAbmComponent } from './components/juego-abm/juego-abm.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';


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
    MensajesComponent,
    JuegoAbmComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp({  
      apiKey: "AIzaSyD4vaUupV7C8lUNEZzsBx_pYj0I-Gg-b-0",
      authDomain: "asdadadasdasdsadasdasd.firebaseapp.com",
      projectId: "asdadadasdasdsadasdasd",
      storageBucket: "asdadadasdasdsadasdasd.appspot.com",
      messagingSenderId: "121836293683",
      appId: "1:121836293683:web:546a4ec387ede09638dd46",
      measurementId: "G-0N2PHB13H3"
   })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: {  
    apiKey: "AIzaSyD4vaUupV7C8lUNEZzsBx_pYj0I-Gg-b-0",
    authDomain: "asdadadasdasdsadasdasd.firebaseapp.com",
    projectId: "asdadadasdasdsadasdasd",
    storageBucket: "asdadadasdasdsadasdasd.appspot.com",
    messagingSenderId: "121836293683",
    appId: "1:121836293683:web:546a4ec387ede09638dd46",
    measurementId: "G-0N2PHB13H3"
 } }],
  bootstrap: [AppComponent]
})
export class AppModule { }