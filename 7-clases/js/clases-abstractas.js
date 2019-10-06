"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Perro = /** @class */ (function () {
    function Perro(raza, edad) {
        this.raza = raza;
        this.edad = edad;
    }
    return Perro;
}());
var Mutante = /** @class */ (function () {
    function Mutante(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutante;
}());
var Feos = /** @class */ (function (_super) {
    __extends(Feos, _super);
    function Feos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Feos;
}(Mutante));
// let javier = new Mutante(); // ERROR -> no se puede CREAR una instancia de una clase ABSTRACT
var spike = new Feos("Spike", "Pancho"); // si se puede extender (HEREDAR sus propiedades)
console.log(spike);
console.log(spike instanceof Mutante);
console.log(spike instanceof Feos);
console.log(spike instanceof Perro);
console.log(spike instanceof Object);
console.log(spike instanceof Function);
// console.log(typeof spike === "object");
//# sourceMappingURL=clases-abstractas.js.map