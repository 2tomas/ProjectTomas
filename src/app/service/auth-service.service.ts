import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }

  login(email: string, password: string) {
      return  this.auth.signInWithEmailAndPassword(
        email,
        password
      );
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  loginGoogle() {
    return this.auth.signInWithPopup(new GoogleAuthProvider());
  }
  
  getAuth(){
    return this.auth.authState.pipe(map(auth=>auth));
  }

  logOut() {
    this.auth.signOut();
  }
}
