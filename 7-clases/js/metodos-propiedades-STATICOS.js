"use strict";
var Unicornio = /** @class */ (function () {
    function Unicornio() {
    }
    Unicornio.crearXmen = function () {
        console.log("Se creo usando metodo STATICO");
        return new Unicornio();
    };
    Unicornio.nombre = "Wolverine";
    return Unicornio;
}());
console.log("Nombre statico", Unicornio.nombre);
var wolverin2 = Unicornio.crearXmen();
console.log("Unicornio Creado desde STATIC", wolverin2);
//# sourceMappingURL=metodos-propiedades-STATICOS.js.map