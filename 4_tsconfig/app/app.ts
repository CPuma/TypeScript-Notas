/*!
* ESTE COMENTARIO SI SE COMPILARA por el signo de admiracion y estar en la cabecera
*/
// Heroe es el personaje principal
let heroe: string = "Ricardo Tapia (Robin)";
// esta variable contiene la edad
let edad: number = 30;
// esto imprime el mensaje
let mensaje = imprimir(heroe, edad);

console.log(mensaje)

// funcion para imprimir 

/*
* Esto es un comentario multilinea
*/
function imprimir(heroe: string, edad: number): string {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + "" + edad;
}