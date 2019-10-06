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
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        if (!esEditable) {
            console.warn("No me haran cambiar de opinion");
        }
        else {
            descriptor.writable = esEditable;
        }
    };
}
var Malo = /** @class */ (function () {
    function Malo(nombre) {
        this.nombre = nombre;
    }
    Malo.prototype.plan = function () {
        console.log("Es dominar el mundo");
    };
    __decorate([
        editable(false)
    ], Malo.prototype, "plan", null);
    return Malo;
}());
var jocker = new Malo("Guason");
jocker.plan = function () {
    console.log("Es Cortar Flores");
};
jocker.plan();
