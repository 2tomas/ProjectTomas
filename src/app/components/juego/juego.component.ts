import { Component, Input } from '@angular/core';
import { Juego } from 'src/app/entidades/juego';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
  @Input('juegoChild')
  public juego:Juego = new Juego;  
}
