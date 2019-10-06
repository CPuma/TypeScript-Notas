"use strict";
// Si no se espcifica el tipo . por default es PUBLIC
// PUBLICO - DESDE CUALQUIER CLASE
// PRIVADO - SOLO DESDE LA MISMA CLASE
// PROTECTED - DESDE LA MISMA CLASE o sus HIJOS
var Titan = /** @class */ (function () {
    function Titan(nombre, equipo, nombreReal) {
        this.nombre = "Sin Nombre";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        console.log("Se ejecutor el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Titan.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    Titan.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    Titan.prototype.cambiarEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    return Titan;
}());
var fury = new Titan("Antman", "cap", "Scott Lang");
console.log(fury);
fury.nombre = "Nick Fury";
// fury.equipo = "IronMan"; // error por que este METODO ES PROTECTED
fury.bio();
// fury.cambaiarEquipo("cap") // error por que este metodo es PRIVADO
console.log(fury.cambiarEquipoPublico("ironman"));
//# sourceMappingURL=propiedades-publicas-privadas-protegidas.js.map