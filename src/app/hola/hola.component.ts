import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit {

  public title = 'Componente Hola Mundo';
  public nombre = 'Juan Perez';

  constructor() { }

  ngOnInit(): void {
  }

}
