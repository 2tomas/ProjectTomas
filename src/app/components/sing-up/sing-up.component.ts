import { Component } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {
  public usuario: Usuario = new Usuario();

  public guardarDatos() : boolean {
    if(localStorage.getItem(this.usuario.usuario) == null) {
      localStorage.setItem(this.usuario.usuario, JSON.stringify(this.usuario))
      return true;
    } else {
      return false;
    }
  }

}
