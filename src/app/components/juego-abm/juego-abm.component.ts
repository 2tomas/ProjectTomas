import { Component, Input } from '@angular/core';
import { Firestore, deleteDoc, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Juego } from 'src/app/entidades/juego';
import { JuegosService } from 'src/app/service/juegos.service';

@Component({
  selector: 'app-juego-abm',
  templateUrl: './juego-abm.component.html',
  styleUrls: ['./juego-abm.component.css']
})
export class JuegoAbmComponent {
  public listaJuego: Juego[];

  public id: String = "";
  public nuevoJuego: Juego = new Juego();

  public agregarflag : boolean = false;
  public editarFlag : boolean = false;

  constructor(public juegoService:JuegosService, public firestore: Firestore, public router: Router) {
    this.listaJuego = juegoService.getJuego();
  }

  async deleteUser(juego : Juego) {
    var juegoRef = doc(this.firestore, 'Juego', juego.titulo.toString());
    await deleteDoc(juegoRef);
  }

  botonAgregarJuego() {
    this.agregarflag = true;
    this.editarFlag = false;
    this.nuevoJuego = new Juego;
  }

  agregarJuego() {
    var nuevojuegoRef = doc(this.firestore, 'Juego', this.nuevoJuego.titulo.toString())

    setDoc(nuevojuegoRef, this.nuevoJuego.toObject())
  }


  botonEditarJuego(juego : Juego) {
    this.nuevoJuego = juego;
    this.id = juego.titulo;
    this.editarFlag = true;
    this.agregarflag = false;
  }
  
  editarJuego() {
    var juegoRef = doc(this.firestore, 'Juego', this.id.toString());
    deleteDoc(juegoRef)

    var nuevojuegoRef = doc(this.firestore, 'Juego', this.nuevoJuego.titulo.toString())

    setDoc(nuevojuegoRef, this.nuevoJuego)
  }
}
