import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminosYCondicionesComponent } from './components/terminos-y-condiciones/terminos-y-condiciones.component';
import { NotfoundComponent } from './components/not-found/not-found.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: 'terminosYCondiciones', component: TerminosYCondicionesComponent},
  {path: '', component: InicioComponent},
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
