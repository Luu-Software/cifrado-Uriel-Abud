import { preguntar } from './lib/consola.ts';

let tarjetaTexto: string = preguntar('Ingresá el número de tarjeta: ');
let tarjetaNúmero: number = Number (tarjetaTexto);

console.log (tarjetaNúmero);

function obtenerPrefijo(número: number, longitudPrefijo: number): number {
  return Math.floor (número / (10**(16 - longitudPrefijo)));; // COMPLETAR
}

let prefijo1: number = obtenerPrefijo (tarjetaNúmero, 1);
let prefijo2: number = obtenerPrefijo (tarjetaNúmero, 2);

let red: string = ""; // COMPLETAR

if (prefijo2 === 34 || prefijo2 === 37) {
  red = "AMEX";
}
else if (prefijo1 === 4) {
  red = "VISA";
}
else if (prefijo2 === 51 || prefijo2 === 52 || prefijo2 === 53 || prefijo2 === 54 || prefijo2 === 55) {
  red = "MASTERCARD";
}
else {
  red = "Desconocida";
}

console.log(red);