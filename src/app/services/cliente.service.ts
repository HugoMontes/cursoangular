import { Injectable } from '@angular/core';
// Importar los modulos HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Importar el modulo Observable que permite usar rxjs
import { Observable } from 'rxjs';

// Importar modelo de datos
import { Cliente } from '../model/cliente';

// Definir constantes
const endpoint = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

// Definir la clase para el servicio
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  // Agregar como atributo un objeto de HttpClient
  constructor(
    private http: HttpClient
  ) { }
  // Crear función que devuelve un listado
  findAllClientes(): Observable<Cliente[]> {
    // Concatenar al endpoint la ruta faltante para obtener el listado
    return this.http.get<Cliente[]>(endpoint + 'cliente');
  }
  // Crear funcion para guardar un registro
  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(endpoint + 'cliente', cliente, httpOptions);
  }
}
