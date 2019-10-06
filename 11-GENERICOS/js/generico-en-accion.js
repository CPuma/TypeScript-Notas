"use strict";
function functionGenerica(arg) {
    return arg;
}
var deadPool = {
    nombre: "DeadPool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneracion"
};
// Al definir el Tipo Generico exacto , typeScript solo nso dejara acceder a las propiedades del Typo que Determinamos
console.log(functionGenerica(deadPool).nombre);
console.log(functionGenerica(deadPool).nombreReal);
// Deal pool Heroe no puede Acceder a su PODER
console.log(functionGenerica(deadPool).poder); // ERROR
console.log(functionGenerica(deadPool).nombre);
console.log(functionGenerica(deadPool).poder);
// Deal pool VILLANO no puede Acceder a su nombreREAL
console.log(functionGenerica(deadPool).nombreReal); // ERROR
