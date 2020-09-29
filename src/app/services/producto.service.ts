import {Injectable} from '@angular/core';
@Injectable()
export class ProductoService{

    // Definir un atributyo tipo array
    public coleccion_productos = ['Arroz','Fideo'];

    // METODOS DE SERVICIO

    // Definir metodo que retorna la coleccion
    getProductos(): Array<string>{
        return this.coleccion_productos;
    }

    // Definir metodo para adicionar un elemento y que devuelva el 
    // array de productos
    addProducto(nombre_producto: string): Array<string>{
        this.coleccion_productos.push(nombre_producto);
        return this.getProductos();
    }

    // Definir metodo para eliminar un producto de la coleccion
    deleteProducto(index: number){
        // Metodo splice(indice, nro_elem_a_borrar)
        this.coleccion_productos.splice(index, 1);
        return this.getProductos();
    }
}
