import { Component, OnInit } from '@angular/core';
// Importar los modulos Router, ActivatedRoute y Params
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// Importar el modulo Router
import { Router, ActivatedRoute} from '@angular/router';

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
  // En el constructor iniciar el objeto ActivatedRoute
  // En el constructor iniciar el objeto Router
  constructor(
    private route: ActivatedRoute,
    private router: Router
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
  // Crear el metodo redirigir1
  redirigir1() {
    this.router.navigate(['/home']);
  }
  // Crear el metodo redirigir2
  redirigir2() {
    this.router.navigate(['/parametros', 'Luis']);
  }
}
