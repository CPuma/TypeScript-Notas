"use strict";
// Si conocemos el tipo de datos que tendra cada uno de los ELEMENTOS, podemos Espeficiarlos para  obtener la ayuda de typescript luego
var hero = ["Dr Strange", 100];
hero[0] = 124; // ERROR, 
hero[0] = "jeje"; // OK
hero[1] = 231; // OK
hero[1] = "jojojo"; // ERROR
// Al definir las reglas, debemos respetarlas
var hero2 = ["JEJE", 123]; // ERROR , se espera 3 elementos
//# sourceMappingURL=tuplas.js.map