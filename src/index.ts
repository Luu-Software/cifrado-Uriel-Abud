import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

let palabra: string = preguntar('Palabra a cifrar o descifrar: '); // Preguntar por la palabra a cifrar o descifrar

let claveTexto: string = preguntar('Clave de cifrado (número): '); // Preguntar por la clave de cifrado (número)
let clave: number = Number(claveTexto);

let accion: string = preguntar('¿Desea cifrar o descifrar? cifrar/descifrar: '); // Preguntar si se desea cifrar o descifrar (cifrar/descifrar)

let resultado: string = ''; // COMPLETAR

if (accion === "cifrar") {
    resultado = cifrar(palabra, clave)
}
else if (accion === "descifrar") {
    resultado = descifrar(palabra, clave)
}

console.log(resultado);