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
  // Definir un array de objetos coche
  public coches:Array<Coche>;

  // Inicializar las propiedades
  constructor() { 
    this.title = 'Componente Coche';
    this.coche = new Coche('',0,'');
    // Inicializar el array de coches
    this.coches=[
      new Coche('Totoya',25000,'#000'),
      new Coche('Subaru',15000,'#00f'),
      new Coche('BMW',28000,'#f00')
    ];
  }

  ngOnInit(): void {
  }

  // Definir el metodo enviar
  onSubmit(){
    // Para probar mostrar los datos enviados
    console.log(this.coche);
    // Adicionar el objeto a la coleccion
    this.coches.push(this.coche);
    // Limpiar el formulario
    this.coche = new Coche('',0,'');
  }
}
