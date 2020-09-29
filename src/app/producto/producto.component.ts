import { Component, OnInit } from '@angular/core';

// Importar el servicio
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  // Adicionar la propiedad providers que mediante la
  // inyeccion de depencias genera instancias de los servicios
  providers: [ProductoService],
})
export class ProductoComponent implements OnInit {

  // Propiedad para el titulo
  public title='Gestion de Productos';
  // Adicionar atributo de producto a guardar
  public nombre_producto: string;
  // Adicionar atributo listado de productos
  public listado_productos: Array<string>;


  // Crear una propiedad en el constructor para poder usar el servicio
  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    // Llamar a algunos de los metodos del servicio
    // cargar el listado mediante el servicio
    this.listado_productos=this.productoService.getProductos();
    console.log(this.listado_productos);
  }

  // Definir metodo guardar producto
  guardarProducto(){
    // Adicionar nuevo producto mediante el servicio
    this.productoService.addProducto(this.nombre_producto);
    // Limpiar campo de texto
    this.nombre_producto=null;
  }

  // Definir el metodo eliminar producto
  eliminarProducto(index: number){
    // alert(index);
    if(confirm('Esta seguro de eliminar el producto?')){
      // Eliminar producto mediante el servicio
      this.productoService.deleteProducto(index);
    }
  }
}
