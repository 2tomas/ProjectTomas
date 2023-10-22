import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  item: Observable<any[]>;
  public valor : string = "";

  constructor(public firestore: Firestore) {
    const itemCollection = collection(this.firestore, 'Mensaje');
    this.item = collectionData(itemCollection);
  }

  agregar(){
    var id = Math.random() * 100000 * (new Date().getMilliseconds());
    setDoc(doc(this.firestore,'Mensaje', id.toString()), {Usuario: this.valor})
  }
}
