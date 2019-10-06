"use strict";
function enviarMision(xmen) {
    console.log("Enviando a : " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
    xmen.regenerar();
}
var wolverine = {
    nombre: "Logan",
    // poder: "Regeneracion"    // OPCIONAL
    regenerar: function () {
        console.log("Se ha regenerado " + this.nombre);
    },
};
enviarMision(wolverine);
enviarCuartel(wolverine);
