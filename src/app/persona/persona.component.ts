import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public title;
  public nombre:string;    
  public edad:number;	     
  public mayorEdad:boolean;
  public comodin:any;		
  public profesiones:Array<string>;
  public miarray:Array<any>; 

  constructor() {
    this.title = 'Componente Persona';
    this.title='Componente Persona';
    this.nombre='Pedro';
    this.edad=10;                  
    this.mayorEdad=false;
    this.comodin=100;
    this.profesiones=['Carpintero','Pintor','Fontanero'];
    this.miarray=['Azul',12,true];
    console.log(this.nombre);
   }

  ngOnInit(): void {
    // Llamar a una funcion con parametros
    this.hola('Ariel');
    // Llamar a una funcion que cambia valor de propiedad
    this.cambiarEdad(55);

  }
  // Definir una funcion con parametros
  hola(nombre): void {
    // alert('Hola ' + nombre);
  }
  // Definir una funcion que cambia valor de propiedad
  cambiarEdad(edad): void {
    this.edad = edad;
  }
}
