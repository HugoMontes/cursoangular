// Importar modulos de Pipe
import {Pipe, PipeTransform} from '@angular/core';
// Agregar el decorador @Pipe que permite ponerle el nombre al pipe
@Pipe({ name: 'calculadora' })
// Crear la clase e implementar PipeTransform
export class CalculadoraPipe implements PipeTransform{
    // Implementar el metodo transform() donde se ejecutara 
    // toda la logica de la pipe
    transform(valorA: number, valorB: number): any{
        let a = valorA;
        let b = valorB;
        let c = valorA * valorB;
        let result = 'El producto: ' + a + ' x ' + b + '=' + c;
        return result;
    }
}
