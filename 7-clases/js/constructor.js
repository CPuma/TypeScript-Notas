"use strict";
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Sin Nombre";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        console.log("Se ejecutor el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman);
//# sourceMappingURL=constructor.js.map