import { Component, Input } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc, getDocs, query, setDoc } from '@angular/fire/firestore';
import { format } from 'date-fns';
import { Juego } from 'src/app/entidades/juego';
import { AuthService } from 'src/app/service/auth-service.service';


@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
  @Input('juegoChild')
  public juego:Juego = new Juego();
  public usuario: any;
  public compraExitosa = false;

  constructor(public firestore: Firestore, public auth: AuthService) {}
  
  buyGame(){
    this.auth.getAuth().subscribe(auth =>{
      if(auth){
        this.usuario = auth.email;

        const userDocRef = doc(this.firestore, 'Usuario', this.usuario);

        const postsCollectionRef = collection(userDocRef, 'Juegos');

        const juegoData = {
          titulo: this.juego.titulo,
          descripcion: this.juego.descripcion,
          precio: this.juego.precio,
          fechaCompra: format(new Date(), 'dd/MM/yyyy')
        };

        const postDocRef = doc(postsCollectionRef, juegoData.titulo.toString());
        setDoc(postDocRef, juegoData);
        this.compraExitosa = true;
      }
    })    
  }
}
