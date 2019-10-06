"use strict";
// export { };
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador normal de CLASE
function consola(constructor) {
    console.log(constructor);
}
// Decorador Factory
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    else {
        return null;
    }
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola // decorador normal, se ejecuta Automaticamente
    ], Villano);
    return Villano;
}());
var Heroe = /** @class */ (function () {
    function Heroe(nombre) {
        this.nombre = nombre;
    }
    Heroe = __decorate([
        imprimirConsola(false) // decorador factory, solo se ejecuta cuando lo activamos true
    ], Heroe);
    return Heroe;
}());
