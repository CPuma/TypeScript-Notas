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
var Vengador = /** @class */ (function () {
    // public nombre: string;
    // public nombreReal: string;
    function Vengador(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        console.log("Constructor Vengador llamado");
        // this.nombre = nombre;
        // this.nombreReal = nombreReal
    }
    Vengador.prototype.getNombre = function () {
        return this.nombre;
    };
    Vengador.prototype.getNombreReal = function () {
        console.log("getNombreReal Vengador (protegido)");
        return this.nombreReal;
    };
    return Vengador;
}());
// cuando no se DEFINE el constructror de un HIJO
// toma por default el constructor del PADRE
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmen;
}(Vengador));
var Shield = /** @class */ (function (_super) {
    __extends(Shield, _super);
    function Shield(a, b) {
        var _this = this;
        console.log("Constructor Shield llamado");
        _this = _super.call(this, a, b) || this;
        return _this;
    }
    // los metodos PROTECTED del PADRE solo puede ser llamados desde la SUBCLASE hija, no desde el objeto del hijo
    // para poder llamarlo desde el objeto tendriamos que llamarla desde un metodo public (puede ser con el mismo nombre)
    Shield.prototype.getNombreReal = function () {
        console.log("getNombreReal Shield (public)");
        // para llamar al  padre , se usa SUPER
        return _super.prototype.getNombreReal.call(this);
    };
    return Shield;
}(Vengador));
// let ciclope: Vengador = new Vengador("Ciclope", "Scott");
// let storm: Xmen = new Xmen("Penny", "Carter");
var juvilo = new Shield("jeje", "JOJO");
console.log(juvilo.getNombre()); // llamo un metodo PUBLIC del padre 
console.log(juvilo.getNombreReal()); // llamo un metodo PROTECTED del padre, desde un metodo public del HIJO
//# sourceMappingURL=herencia.js.map