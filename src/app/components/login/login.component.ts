import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider} from 'firebase/auth'
import { AuthService } from 'src/app/service/auth-service.service';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email : string ='';
  public password : string='';

  constructor(public router : Router, public authService : AuthService, public firestore: Firestore) {
  }
  
  loginGoogle() {
    this.authService.loginGoogle();
    this.router.navigateByUrl("");
  }

  async login() {
    const userDocRef = doc(this.firestore, 'Usuario', this.email);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
  
      if (userData['contrasena'] === this.password) {
        console.log('Login successful');
        this.authService.login(this.email, this.password)
        this.router.navigateByUrl("");
      } else {
        console.log('Password is incorrect');
      }
    } else {
      console.log('User not found');
    }

  }

  public Cancelar(){
    this.router.navigateByUrl("");
  }
}
