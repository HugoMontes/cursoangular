import { Component, OnInit } from '@angular/core';
// Importar la clase del modelo de Empleado
import { Empleado } from './empleado.model.js';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  // Definir la propiedad titulo como publica
  public title = 'Componente Empleado';
  // Declarar una propiedad de tipo Empleado
  public jefe: Empleado;
  // Declarar una propiedad de tipo Array
  public empleados: Array<Empleado>;

  // Declarar una propiedad de tipo boolean
  public show_estrella:boolean;

  // Definir un constructor
  constructor() { 
    // Instanciar un Empleado
    this.jefe=new Empleado('Juan Perez', 33, 'Jefe', true);
    // Inicializar el array de trabajadores
    this.empleados = [
      new Empleado('Marcos Flores', 45, 'Diseñador', true),
      new Empleado('Ana Lopez', 25, 'Analista', true),
      new Empleado('Ivan Robles', 30, 'Programador', false)
    ];
    // Inicializar en false
    this.show_estrella=false;
  }
  // Definir el metodo inicial
  ngOnInit(): void {
    // Mostrar por consola el empleado
    console.log(this.jefe);
    // Mostrar por consola el array de empleados
    console.log(this.empleados);
  }
}
