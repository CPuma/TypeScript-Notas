class Squad {
    private _nombre: string | undefined;
    constructor(nombre?: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        // console.log("Paso por el ger nombre()");

        if (this._nombre) {
            return this._nombre
        } else {
            return "No tiene nombre el Squad"
        }
    }

    set nombre(nombre: string) {
        if (nombre.length <= 3) {
            console.error("El nombre debe tener al menos 3 caracteres")
            return; // si no es un nombre valido , no hara nada
        }
        // console.log("Se llamo SET del nombre")
        this._nombre = nombre
    }
}

// let deapPool: Squad = new Squad("DeapPool");
// console.log(deapPool.nombre)

let wolverine: Squad = new Squad();
console.log(wolverine.nombre)
wolverine.nombre = "Lo"         // no hara nada pro que tiene menos o igual  de 3 caracteres
console.log(wolverine.nombre)
wolverine.nombre = "Logan"
console.log(wolverine.nombre)