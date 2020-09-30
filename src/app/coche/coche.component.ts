import { Component, OnInit } from '@angular/core';
// Importar el modelo de Coche
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  // Definir propiedad de titulo
  public title: string;
  // Definir una propiedad coche
  public coche: Coche;
  // Inicializar las propiedades
  constructor() { 
    this.title = 'Componente Coche';
    this.coche = new Coche('',0,'');
  }

  ngOnInit(): void {
  }

  // Definir el metodo enviar
  onSubmit(){
    // Para probar mostrar los datos enviados
    console.log(this.coche);
  }
}
