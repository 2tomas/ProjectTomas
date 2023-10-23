import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { format } from 'date-fns';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  item: Observable<any[]>;
  public valor : string = "";
  usuario: any;

  constructor(public firestore: Firestore, public auth: AuthService) {
    const itemCollection = collection(this.firestore, 'Mensaje');
    this.item = collectionData(itemCollection);
  }



  agregar(){
    this.auth.getAuth().subscribe(async auth =>{
      if(auth){

        this.usuario = auth.email;

        const userDocRef = doc(this.firestore, 'Usuario', this.usuario);
        const userSnapshot = await getDoc(userDocRef);
        
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();

          const mensajeUser = {
            usuario: userData['usuario'],
            mensaje: this.valor,
            fecha: format(new Date(), 'dd/MM/yyyy HH:mm:ss')
          }

          var id = Math.random() * 100000 * (new Date().getMilliseconds());
          setDoc(doc(this.firestore,'Mensaje', id.toString()), mensajeUser)
        } 
      }
    })  

  }
}
