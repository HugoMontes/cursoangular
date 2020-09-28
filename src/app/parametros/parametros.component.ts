import { Component, OnInit } from '@angular/core';
// Importar los modulos Router, ActivatedRoute y Params
// import { Router, ActivatedRoute, Params } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {
  // Propiedad titulo
  public title = "Paso de Parametros"
  // Propiedad nombre
  public nombre;
  // Constructor
  constructor(
    private route: ActivatedRoute,
  ) { }
  // Funcion inicial
  ngOnInit(): void {
    // Recuperar los parametros con una funcion de callback
    // Una funcion flecha (=>) es similiar a una funcion anonima 
    // el cual permite acceder a los parametros/atributos de una 
    // clase fuera del ambito.
    this.route.paramMap.subscribe(params => {
        this.nombre = params.get('param_nombre');
    });
  }
}
