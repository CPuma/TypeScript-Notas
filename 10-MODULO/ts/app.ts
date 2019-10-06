// import { PI } from "./validaciones/numeros";
import numero from "./validaciones/numeros"; // se pone cualquier numero y coge la funcion por DEFAULT

// import { MENSAJES } from "./validaciones/textos"
import * as textos from "./validaciones/textos"


// console.log(PI)
console.log(numero(10, 5))

// console.log(MENSAJES)
console.log(textos.obtenerError(0))
console.log(textos.obtenerError(3))

