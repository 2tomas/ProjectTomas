import { Injectable } from '@angular/core';
import { Juego } from '../entidades/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  private juegos: Juego[];

  getJuego(): Juego[] {
    return this.juegos;
  }

  constructor() { 
    this.juegos = [];
    this.juegos.push(<Juego> {titulo: 'Battlefield V', descripcion: 'Esta es la mejor experiencia de Battlefield V. Vive el mayor conflicto de la humanidad con un completo arsenal de armas, vehículos y dispositivos, y todos los contenidos de personalización de los dos primeros años.', precio: 5299});
    this.juegos.push(<Juego> {titulo: 'Valheim', descripcion: 'Un brutal juego de supervivencia y exploración multijugador, ambientado en un purgatorio generado de forma procedural e inspirado en la cultura vikinga. ¡Lucha, construye y conquista tu viaje en una saga digna de la bendición de Odin!', precio: 799});
    this.juegos.push(<Juego> {titulo: 'The Outlast Trials', descripcion: 'Red Barrels invites you to experience mind-numbing terror, this time with friends. Whether you go through the trials alone or in teams, if you survive long enough and complete the therapy, Murkoff will happily let you leave… but will you be the same?', precio: 2100});
    
  }
}
