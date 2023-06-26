import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuario: string = "";
  public contrasena: string = "";
  public flag: Boolean = true;
  public jsonData: string = "";

  public logear() {
    this.jsonData = localStorage.getItem(this.usuario)??""; 
    
    try {
      let getUsuario: Usuario = JSON.parse(this.jsonData);

      if(getUsuario.contrasena == this.contrasena && getUsuario.usuario == this.usuario){
        this.flag = true;
      } else {
        this.flag = false;
      }
    } catch {
      this.flag = false;
    }

  }

}
