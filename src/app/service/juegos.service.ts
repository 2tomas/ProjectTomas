import { Injectable } from '@angular/core';
import { Juego } from '../entidades/juego';
import { Firestore, collection, collectionData, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  private juegos: Juego[] = [];

  item!: Observable<any[]>;

  getJuego(): Juego[] {
    return this.juegos;
  }

  constructor(public firestore: Firestore) { 
    this.fetchJuegos();
  }

  async fetchJuegos() {
    const itemCollection = collection(this.firestore, 'Juego');
    this.item = collectionData(itemCollection);

    
    this.item.subscribe((documents: any[]) => {
      documents.forEach((juego: any) => {
        this.juegos.push(<Juego>{ titulo: juego.titulo, descripcion: juego.descripcion, precio: juego.precio });
      });
    })
  }
}
