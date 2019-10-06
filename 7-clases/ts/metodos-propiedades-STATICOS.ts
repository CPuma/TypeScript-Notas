class Unicornio {
    static nombre: string = "Wolverine";
    constructor() {

    }

    static crearXmen() {
        console.log("Se creo usando metodo STATICO");

        return new Unicornio();
    }
}

console.log("Nombre statico", Unicornio.nombre);

let wolverin2 = Unicornio.crearXmen();
console.log("Unicornio Creado desde STATIC", wolverin2);

