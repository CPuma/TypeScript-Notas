"use strict";
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) { // si no hay una Instancia de Apocalipsis
            Apocalipsis.instancia = new Apocalipsis("Soy apocalipsis... el UNICO!");
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
// let apocalipsisFalso = new Apocalipsis("Soy Apocalipsis Falso"); // ERROr - el constructor es  PRIVATE
var apocalipsisReal = Apocalipsis.llamarApocalipsis();
console.log(apocalipsisReal.nombre);
//# sourceMappingURL=constructor-privado-SINGLETON.js.map