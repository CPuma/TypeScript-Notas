function planHeroe(constructor: Function) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es salvar el mundo!")
    }
}
function imprimible(constructor: Function) {
    constructor.prototype.imprimible = function () {
        console.log(this)
    }
}

@imprimible
@planHeroe
class XMen {
    constructor(public nombre: string, public poder: string) {

    }
}

let superman = new XMen("Klark Kent", "Superfuerza");
(<any>superman).imprimirPlan();
(<any>superman).imprimible();