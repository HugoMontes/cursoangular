import { Component, OnInit } from '@angular/core';
// Importar el servicio de peticion
import { ClienteService } from '../services/cliente.service';
// Importar el modelo 
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  // Cargar el servicio el los providers del componente
  providers: [ClienteService]
})
export class ClienteComponent implements OnInit {

  // Adicionar atributo coleccion de objetos
  public clientes: Cliente[];

  // Adicionar como atributo en el contructor el servicio
  constructor(
    private _peticionService: ClienteService
  ) { }

  ngOnInit(): void {
    // Capturar la respuesta del servicio mediante subscribe()
    this._peticionService.findAllClientes().subscribe(
      // funcion result: captura el resultado
      result => {
        // Mostrar el resultado en consola
        console.log(result);
        // Asignar el resultado a articulos
        this.clientes = result;
        // Verificar que no falle respuesta articulos
        if (!this.clientes) {
          console.log('Error en el servidor');
        }
      },
      // funcion error: captura el error
      error => {
        // Mostrar el error en consola
        const errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }
}
