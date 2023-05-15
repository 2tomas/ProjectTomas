import { Component } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuario: string = "";
  public contrasena: string = "";
  public jsonData: string | null  = "";
  

  public logear(): boolean {
    this.jsonData = localStorage.getItem(this.usuario)??null; 

    if(this.jsonData != null){
      let getUsuario: Usuario = JSON.parse(this.jsonData);
      
      if(getUsuario.contrasena == this.contrasena && getUsuario.usuario == this.usuario){
        return true;
      } else {
        return false;
      }

    } else {
      return false;
    }
  }

}
