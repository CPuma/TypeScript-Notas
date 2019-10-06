"use strict";
// ASÍDECLARAMOS metodos en un Objeto
// >          getNombre: () => string 
var acuaman = {
    nombre: "Cesar Puma",
    edad: 27,
    poderes: [
        "programador reactivo", "Guapo"
    ],
    getNombre: function () {
        return this.nombre;
    }
};
console.log("Acuaman", acuaman.getNombre());
