import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  // Propiedad para el titulo
  public title='Filtros Angular';
  // Adicionar una propiedad fecha
  public fecha: Date;

  constructor() {
    // Inicializar la fecha en 1/enero/2018
    this.fecha = new Date(2018,0,20);
  }

  ngOnInit(): void {
  }
}
