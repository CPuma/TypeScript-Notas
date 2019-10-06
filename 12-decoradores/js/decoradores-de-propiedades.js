"use strict";
// Las expresiones de los metodos decoradores . Reciven 3 argumentos
// TARGET --- constructor de la function o clase  si es miembro esatico o el prototypo
// Nombre de la propiedad 
// Descriptor
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function imprimir(constructor) {
    constructor.prototype.imprimible = function () {
        console.log(this);
    };
}
function editableMethod(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esEditable;
    };
}
function editableProp(esEditable) {
    return function (target, nombrePropiedad) {
        var descriptor = {
            writable: esEditable
        };
        return descriptor;
    };
}
var Bueno = /** @class */ (function () {
    function Bueno(nombre) {
        this.nombre = "Lex";
        this.nombre = nombre;
    }
    Bueno.prototype.plan = function () {
        console.log("Es dominar el mundo");
    };
    __decorate([
        editableProp(true)
    ], Bueno.prototype, "nombre", void 0);
    __decorate([
        editableMethod(true)
    ], Bueno.prototype, "plan", null);
    Bueno = __decorate([
        imprimir
    ], Bueno);
    return Bueno;
}());
var ciclope = new Bueno("Guason");
ciclope.imprimir();
ciclope.plan = function () {
    console.log("Es Cortar Flores");
};
ciclope.plan();
