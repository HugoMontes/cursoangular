import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importar el archivo de rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// Se podria eliminar los otros componentes
import { HolaComponent } from './hola/hola.component';
import { PersonaComponent } from './persona/persona.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CursoComponent } from './curso/curso.component';
import { EstiloComponent } from './estilo/estilo.component';
import { HomeComponent } from './home/home.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { HeaderComponent } from './template/header/header.component';
import { NavigationComponent } from './template/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    PersonaComponent,
    EmpleadoComponent,
    CursoComponent,
    EstiloComponent,
    HomeComponent,
    ParametrosComponent,
    HeaderComponent,
    NavigationComponent
  ],
  // Cargar el modulo para lanzar las rutas
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
