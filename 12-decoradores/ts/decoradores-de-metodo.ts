// Las expresiones de los metodos decoradores . Reciven 3 argumentos
// TARGET --- constructor de la function o clase  si es miembro esatico o el prototypo
// Nombre de la propiedad 
// Descriptor

function editable(esEditable: boolean) {
    return function (target: any, nombrePropiedad: string, descriptor: PropertyDescriptor) {
        if (!esEditable) {
            console.warn("No me haran cambiar de opinion");
        } else {
            descriptor.writable = esEditable;
        }
    }
}

class Malo {
    constructor(public nombre: string) { }

    @editable(false)
    plan() {
        console.log("Es dominar el mundo")
    }
}

let jocker = new Malo("Guason");

jocker.plan = function () {
    console.log("Es Cortar Flores")
}

jocker.plan();