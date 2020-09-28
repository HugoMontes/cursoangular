// Importar el modulo ngModule para configuracion
import { NgModule } from '@angular/core';
// Importar los componentes del router
import { Routes, RouterModule } from '@angular/router';
// Importar componentes propios
import { HolaComponent } from './hola/hola.component';
import { PersonaComponent } from './persona/persona.component';
import { CursoComponent } from './curso/curso.component';
import { EstiloComponent } from './estilo/estilo.component';
// Importar el componente Home
import { HomeComponent } from './home/home.component';
// Definir una constante que contiene un array de objetos json con
// las rutas asociadas a un componente
const appRoutes: Routes = [
  // Definir la ruta home como inicial
  {path: '', component: HomeComponent},
  // Definir las rutas para los componentes
  {path: 'home', component: HomeComponent},
  {path: 'hola', component: HolaComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'estilo', component: EstiloComponent},
  // Definir la ruta para el error 404
  {path: '**', component: EstiloComponent},
];
// Configurar importaciones y exportaciones de NgModule
@NgModule({
    // Inidicar mediante el metodo forRoot el array de rutas a cargar
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
// Exportar la clase para utilizar el routing
export class AppRoutingModule { }
