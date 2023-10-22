import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first, map } from 'rxjs';
import { AuthService } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public usuario: any;
  public isLogged = false;

  constructor(public auth: AuthService) {
    
  }

  ngOnInit(){
    this.auth.getAuth().subscribe(auth =>{

      if(auth){
        this.usuario = auth.email; 
        this.isLogged = true;
      }else{
        this.isLogged=false;
      }

    })
  }

  logOut() {
    this.auth.logOut();
    this.isLogged = false;
  }
}
