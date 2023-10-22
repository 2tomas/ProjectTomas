import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {
  public usuario = new Usuario();
  public contrasena2 : string='';
   
  constructor( 
    public router : Router, 
    public firestore: Firestore,
    public authService : AuthService
    ) {}

  public async Registrar(){
    if (this.usuario.contrasena.length < 6) {
      console.log('Password should be at least 6 characters long.');
      return;
    }
    
    const userDocRef = doc(this.firestore, 'Usuario', this.usuario.email);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      console.log('User already exists. You can notify the user.');
    } else {
      const usuarioData = this.usuario.toObject();

      // Save the user to Firestore
      await setDoc(userDocRef, usuarioData);
      localStorage.setItem(usuarioData.email, JSON.stringify(usuarioData))
      this.authService.signup(usuarioData.email, usuarioData.contrasena)
      this.router.navigateByUrl("");
      console.log('User registered successfully.');
    }
  }

  public async signUpGoogle() {
    try {
      const result = await this.authService.loginGoogle();

      const user = result.user;

      // Set the Usuario class with the user's information and use the authentication as the password.
      this.usuario.usuario = user?.displayName || user?.email || '';
      this.usuario.email = user?.email || '';
      this.usuario.contrasena = user?.uid || ''; // Use user's UID as the password

      // Now, you can save this information to Firestore or perform any other actions.
      const userDocRef = doc(this.firestore, 'Usuario', this.usuario.email);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        console.log('User already exists. You can notify the user.');
      } else {
        const usuarioData = this.usuario.toObject();

        await setDoc(userDocRef, usuarioData);
        localStorage.setItem(usuarioData.email, JSON.stringify(usuarioData))
        console.log('User registered successfully.');
        this.router.navigateByUrl("");
      }
    } catch (error) {
      console.error('Error signing up with Google:', error);
    }
  }

  public Cancelar() {
    this.router.navigateByUrl("");
  }
 
  public isValidForm(): boolean {
    return (
      this.usuario.usuario !== '' &&
      this.usuario.email !== '' &&
      this.usuario.contrasena !== '' &&
      this.contrasena2 !== '' &&
      this.usuario.contrasena === this.contrasena2
    );
  }
}