"use strict";
var Squad = /** @class */ (function () {
    function Squad(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Squad.prototype, "nombre", {
        get: function () {
            // console.log("Paso por el ger nombre()");
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No tiene nombre el Squad";
            }
        },
        set: function (nombre) {
            if (nombre.length <= 3) {
                console.error("El nombre debe tener al menos 3 caracteres");
                return; // si no es un nombre valido , no hara nada
            }
            // console.log("Se llamo SET del nombre")
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Squad;
}());
// let deapPool: Squad = new Squad("DeapPool");
// console.log(deapPool.nombre)
var wolverine = new Squad();
console.log(wolverine.nombre);
wolverine.nombre = "Lo"; // no hara nada pro que tiene menos o igual  de 3 caracteres
console.log(wolverine.nombre);
wolverine.nombre = "Logan";
console.log(wolverine.nombre);
//# sourceMappingURL=gets-sets.js.map