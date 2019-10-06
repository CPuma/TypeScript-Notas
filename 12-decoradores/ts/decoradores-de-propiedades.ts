// Las expresiones de los metodos decoradores . Reciven 3 argumentos
// TARGET --- constructor de la function o clase  si es miembro esatico o el prototypo
// Nombre de la propiedad 
// Descriptor

function imprimir(constructor: Function) {
    constructor.prototype.imprimible = function () {
        console.log(this)
    }
}

function editableMethod(esEditable: boolean) {
    return function (target: any, nombrePropiedad: string, descriptor: PropertyDescriptor) {
        descriptor.writable = esEditable;
    }
}

function editableProp(esEditable: boolean) {
    return function (target: any, nombrePropiedad: string): any {
        let descriptor: PropertyDescriptor = {
            writable: esEditable
        }
        return descriptor
    }
}


@imprimir
class Bueno {
    @editableProp(true)
    public nombre: string = "Lex"

    constructor(nombre: string) {
        this.nombre = nombre
    }

    @editableMethod(true)
    plan() {
        console.log("Es dominar el mundo")
    }
}

let ciclope = new Bueno("Guason");

(<any>ciclope).imprimir();

ciclope.plan = function () {
    console.log("Es Cortar Flores")
}

ciclope.plan();