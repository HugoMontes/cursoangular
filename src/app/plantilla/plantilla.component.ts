import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {
  // Definir las propiedades/atributos
  public title;
  public administrador;
  // Definir el constructor
  constructor() {
    this.title='Componente NgTemplate';
    this.administrador=true;
  }
  ngOnInit(): void {
  }
  // Definir metodo para cambiar de estado
  cambiar(): void{
    this.administrador=!this.administrador;
  }
}
