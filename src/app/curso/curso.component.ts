import { Component, OnInit } from '@angular/core';
// Importar la clase del modelo de Profesor
import { Profesor } from '../model/profesor';

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
  // Definir un constructor
  constructor() {
    // Instanciar un objeto Profesor
    this.profesor=new Profesor('Juan Perez', 5600.50, true);
  }
  // Definir el metodo inicial
  ngOnInit(): void {
    // Mostrar por consola el objeto
    console.log(this.profesor);
  }
}
