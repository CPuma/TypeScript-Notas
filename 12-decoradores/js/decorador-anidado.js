"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function planHeroe(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es salvar el mundo!");
    };
}
function imprimible(constructor) {
    constructor.prototype.imprimible = function () {
        console.log(this);
    };
}
var XMen = /** @class */ (function () {
    function XMen(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    XMen = __decorate([
        imprimible,
        planHeroe
    ], XMen);
    return XMen;
}());
var superman = new XMen("Klark Kent", "Superfuerza");
lex.imprimirPlan();
lex.imprimible();
