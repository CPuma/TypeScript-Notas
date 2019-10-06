"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function parametro(target, metodo, index) {
    console.log("parametro", target, metodo, index);
}
var Minion = /** @class */ (function () {
    function Minion(nombre) {
        this.nombre = nombre;
    }
    // SE EJECUTYA cuando el  navegador VE LA FUNCIOn ... no cuando es llamada. 
    Minion.prototype.imprimir = function (plan, mensaje) {
        if (plan) {
            console.log("El plan es " + mensaje);
        }
        else {
            console.log(mensaje);
        }
    };
    __decorate([
        __param(1, parametro)
    ], Minion.prototype, "imprimir", null);
    return Minion;
}());
