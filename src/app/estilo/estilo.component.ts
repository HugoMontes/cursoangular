import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilo',
  templateUrl: './estilo.component.html',
  styleUrls: ['./estilo.component.css']
})
export class EstiloComponent implements OnInit {

  // Declarar una propiedad de tipo string
  public color: string;

  constructor() {
    // Inicializar color en rojo
    this.color = 'red'; // 'yellow', 'green'
  }

  ngOnInit(): void {
  }

  // Metodo para cambiar de color
  cambiarColor(color): void{
    this.color = color;
  }
}
