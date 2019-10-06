"use strict";
function nombreCompleto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    console.log(void 0 === undefined);
    // parametro DEFAUlt ... traduccion en JS seria esta
    // if (capitalizado === void 0) { capitalizado = false }  
    console.log("capitalizado 1 :: ", capitalizado);
    return nombre + " " + apellido;
}
var nombre = nombreCompleto("tony", "stark");
console.log("nombre completo ::", nombre);
// ================================================
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}
function fullName(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    if (capitalizado)
        return capitalizar(nombre) + ' ' + capitalizar(apellido);
    else
        return nombre + " " + apellido;
}
var nombreSinCapitalizar = fullName("BARry", "ALLEN");
console.log("SinCapitalizar:: ", name);
var nombreCapitalizado = fullName("BARry", "ALLEN", true);
console.log("Capitalizado:: ", name);
