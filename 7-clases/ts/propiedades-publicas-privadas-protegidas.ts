// Si no se espcifica el tipo . por default es PUBLIC

// PUBLICO - DESDE CUALQUIER CLASE
// PRIVADO - SOLO DESDE LA MISMA CLASE
// PROTECTED - DESDE LA MISMA CLASE o sus HIJOS

class Titan {
    public nombre: string = "Sin Nombre";
    protected equipo: string;
    private nombreReal: string;
    private puedePelear: boolean = false;
    private peleasGanadas: number = 0;

    constructor(nombre: string, equipo: string, nombreReal: string) {
        console.log("Se ejecutor el constructor")
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

    public bio(): void {
        let mensaje: string = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
        console.log(mensaje);
    }

    private cambiarEquipo(nuevoEquipo: string): boolean {
        if (nuevoEquipo === this.equipo) {
            return false;
        } else {
            return true
        }
    }

    public cambiarEquipoPublico(nuevoEquipo: string): boolean {
        return this.cambiarEquipo(nuevoEquipo)
    }
}

let fury: Titan = new Titan("Antman", "cap", "Scott Lang");

console.log(fury)
fury.nombre = "Nick Fury";
// fury.equipo = "IronMan"; // error por que este METODO ES PROTECTED

fury.bio();
// fury.cambaiarEquipo("cap") // error por que este metodo es PRIVADO
console.log(fury.cambiarEquipoPublico("ironman"))