import { Component, OnInit } from '@angular/core';
// Importar la clase del modelo de Profesor
import { Profesor } from '../model/profesor';
// Importar la clase del modelo de Estudiante
import { Estudiante } from '../model/estudiante';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  // Definir la propiedad titulo como publica
  public title = 'Componente Curso';
  // Declarar una propiedad de tipo Profesor
  public profesor: Profesor;
  // Declarar una propiedad de tipo boolean
  public mostrarDatos: boolean;
  // Declarar una propiedad de tipo Array
  public estudiantes: Array<Estudiante>;

  // Definir un constructor
  constructor() {
    // Instanciar un objeto Profesor
    this.profesor = new Profesor('Juan Perez', 5600.50, true);
    // Inicializar en false
    this.mostrarDatos = true;
    // Inicializar el array de estudiantes
    this.estudiantes = [
      new Estudiante('Marcos Flores', 48, 90),
      new Estudiante('Ana Lopez', 16, 45),
      new Estudiante('Pedro Robles', 30, 55)
    ];
  }
  // Definir el metodo inicial
  ngOnInit(): void {
    // Mostrar por consola el objeto
    console.log(this.profesor);
    // Mostrar por consola el array de estudiantes
    console.log(this.estudiantes);
  }
  // Definir una funcion que cambia el estado de mostrar_datos
  cambiarEstado(valor): void{
    this.mostrarDatos = valor;
  }
}
