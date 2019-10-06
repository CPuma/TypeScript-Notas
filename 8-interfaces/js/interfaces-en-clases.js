"use strict";
var Xmen = /** @class */ (function () {
    function Xmen(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    Xmen.prototype.regeneral = function () {
        console.log("Se ha regenerado " + this.nombre);
    };
    return Xmen;
}());
