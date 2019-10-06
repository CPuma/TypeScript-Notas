"use strict";
var sumar;
sumar = function (a, b) {
    return a + b;
};
var restar;
restar = function (numero1, numero2) {
    numero1++;
    numero1++;
    return numero1.toString(); // ERROR, se esta devolviendo un STRING,  Y la interface DICe que se Retorna un Number
};
