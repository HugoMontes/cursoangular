import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { PersonaComponent } from './persona/persona.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    PersonaComponent,
    EmpleadoComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
