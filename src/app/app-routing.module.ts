import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminosYCondicionesComponent } from './components/terminos-y-condiciones/terminos-y-condiciones.component';
import { NotfoundComponent } from './components/not-found/not-found.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { JuegoAbmComponent } from './components/juego-abm/juego-abm.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

const routes: Routes = [
  {path: 'terminosYCondiciones', component: TerminosYCondicionesComponent},
  {path: 'mensajes', component: MensajesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'singup', component: SingUpComponent},
  {path: 'abmJuegos', component: JuegoAbmComponent},
  {path: 'estadistica', component: EstadisticasComponent},
  {path: '', component: InicioComponent},
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
