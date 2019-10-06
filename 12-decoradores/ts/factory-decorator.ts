// export { };


// Decorador normal de CLASE
function consola(constructor: Function) {
    console.log(constructor)
}

// Decorador Factory
function imprimirConsola(imprimir: boolean): Function {
    if (imprimir) {
        return consola;
    } else {
        return null;
    }
}


@consola    // decorador normal, se ejecuta Automaticamente
class Villano {
    constructor(public nombre: string) {

    }
}

@imprimirConsola(false)    // decorador factory, solo se ejecuta cuando lo activamos true
class Heroe {
    constructor(public nombre: string) {

    }
}