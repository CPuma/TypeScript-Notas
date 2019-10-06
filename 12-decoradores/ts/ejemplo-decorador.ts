function planVillano(constructor: Function) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo!")
    }
}

@planVillano
class Malhechor {
    constructor(public nombre: string) {

    }
}

let lex = new Malhechor("Lex Luthor");
(<any>lex).imprimirPlan();