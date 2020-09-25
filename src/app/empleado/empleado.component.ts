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
  public empleado: Empleado;
  // Declarar una propiedad de tipo Array
  public trabajadores: Array<Empleado>;

  constructor() { 
    // Instanciar un Empleado
    this.empleado=new Empleado('Juan Perez', 33, 'Jefe', true);
    // Inicializar el array de trabajadores
    this.trabajadores = [
      new Empleado('Marcos Flores', 45, 'Cajero', true),
      new Empleado('Ana Lopez', 25, 'Secretaria', true),
      new Empleado('Ivan Robles', 30, 'Programador', false)
    ];

  }

  ngOnInit(): void {
    // Mostrar por consola el empleado
    console.log(this.empleado);
    // Mostrar por consola el array de empleados
    console.log(this.trabajadores);
  }

}
