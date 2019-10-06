"use strict";
// EN JS todos los parametros son OPCIONES
// EN TS  TOdos los parametros son obligatorios
// TS
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
var nombre = nombreCompleto("Barry", "Allen");
console.log(nombre); // - Barry
// TS
function nombreCompleto2(nombre, apellido) {
    if (nombre && apellido)
        return nombre + ' ' + apellido;
    else if (nombre && !apellido)
        return nombre;
    else
        return 'No ingreso nombre valido :: ' + nombre;
}
var nombre2 = nombreCompleto2("Barry", "Allen");
console.log(nombre2); // - Barry
