// las interfaces son solo GUIAs en clases, se pueden Agregar otras propiedades que no esten en la Interface
interface Mutante {
    nombre: string;
    nombreReal?: string;
    poder: string;
    regeneral(): void;
}

class Xmen implements Mutante {
    nombre: string;  // de la interface
    poder: string; // agregado sin estar en INTERFACE
    regeneral(): void {
        console.log("Se ha regenerado " + this.nombre)
    }

    constructor(nombre: string, poder: string) {
        this.nombre = nombre;
        this.poder = poder;
    }
}