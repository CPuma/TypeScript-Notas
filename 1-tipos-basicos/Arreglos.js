"use strict";
var arreglos = [1, 2, 3, 4];
arreglos.push("123"); // Error, no se puede agregar string a un Arreglo de numeros
var villanitos = ["Omega Rojo", "Dormamu", "Duende Verde"];
villanitos.push(true); // error
villanitos.push(123); // error
villanitos.push("jejejej"); // OK
console.log(villanitos[0].charAt(0)); // Al especificar el tipo de datos en el ARREGLO , typescript no brinda ayudas con respecto a los metodos que podemos usar en el .
//# sourceMappingURL=Arreglos.js.map