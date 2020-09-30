import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importar el archivo de rutas
import { AppRoutingModule } from './app-routing.module';
// Importar el modulo para trabajar con formularios
import { FormsModule } from '@angular/forms';
// Importar el CalculadoraPipe
import { CalculadoraPipe } from './pipes/calculadora.pipe';

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
import { ProductoComponent } from './producto/producto.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { CocheComponent } from './coche/coche.component';

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
    NavigationComponent,
    ProductoComponent,
    FiltrosComponent,
    // Cargar el conversor Pipe
    CalculadoraPipe,
    PlantillaComponent,
    CocheComponent
  ],
  // Cargar el modulo para lanzar las rutas
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule       // <--- importar en el NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
