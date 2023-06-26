import { Component } from '@angular/core';
import { Juego } from 'src/app/entidades/juego';
import { JuegosService } from 'src/app/service/juegos.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {
  public listaJuego: Juego[];

  constructor(public juegoService:JuegosService) {
    this.listaJuego = juegoService.getJuego();
  }
}
