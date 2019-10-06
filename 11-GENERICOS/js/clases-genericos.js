"use strict";
var Figura = /** @class */ (function () {
    function Figura() {
    }
    Figura.prototype.area = function () {
        // Casteamos a NUMBER anteponinedo +
        return +this.base * +this.altura;
    };
    return Figura;
}());
var cuadrado = new Figura();
cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());
var rectangulo = new Figura();
rectangulo.base = "10"; // aceptado
rectangulo.altura = "aaa"; // aceptado PERO no puede mutiplicarse es NaN
console.log(rectangulo.area()); // "NaN" -- pero no botara error
// =========================SOLUCION==================================
// solucion EXTENDEr de NUMBER .  para que acepte solo numero
var Figura2 = /** @class */ (function () {
    function Figura2() {
    }
    Figura2.prototype.area = function () {
        // Casteamos a NUMBER anteponinedo +
        return +this.base * +this.altura;
    };
    return Figura2;
}());
var rectangulo2 = new Figura2();
rectangulo2.base = 10; // aceptado
rectangulo2.altura = "10"; // ERROR
var rectangulo3 = new Figura2();
rectangulo3.base = 10; // aceptado
rectangulo3.altura = "10"; // aceptado
rectangulo3.altura = true; // ERROR
var rectangulo4 = new Figura2(); // error por que no se ESPECIFICO boolean como EXTEND del generico
