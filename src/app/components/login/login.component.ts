import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuario: string = "";
  public contrasena: string = "";
  public flag: Boolean = true;
  public loginFlag: Boolean = true;
  public jsonData: string | null  = "";

  
  public logear() {
    this.jsonData = localStorage.getItem(this.usuario)??null; 

    if(this.jsonData != null){
      let getUsuario: Usuario = JSON.parse(this.jsonData);
      
      if(getUsuario.contrasena == this.contrasena && getUsuario.usuario == this.usuario){
        this.flag = true;;
        this.loginFlag= false;
      } else {
        this.flag = false;
      }

    } else {
      this.flag = false;
    }
  }

}
