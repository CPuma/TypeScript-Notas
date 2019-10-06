"use strict";
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I am " + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado!");
}
// MALLLLL ..Mi funcion puede tomar cualquier VALOr . generando futuros ERRORES
var miFunction;
miFunction = 10;
console.log(miFunction);
miFunction = sumar;
console.log(miFunction(5, 5));
miFunction = saludar;
console.log(miFunction("Batman"));
miFunction = salvarMundo;
miFunction();
// BIEN  ... Especificando la entrada y saluda de MI funcion  . SE puede CONTROLAR mejor
var noEsUnaFuncion = 10;
console.log(noEsUnaFuncion);
var funcionSuma;
funcionSuma = sumar;
console.log(funcionSuma(5, 5));
var funcionSaludo;
funcionSaludo = saludar;
console.log(funcionSaludo("Batman"));
var funcionVacia;
funcionVacia = salvarMundo;
funcionVacia();
