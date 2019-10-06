class Vengador {
    // public nombre: string;
    // public nombreReal: string;
    constructor(public nombre: string, private nombreReal: string) { // forma abreviada
        console.log("Constructor Vengador llamado")
        // this.nombre = nombre;
        // this.nombreReal = nombreReal
    }
    public getNombre(): string {
        return this.nombre
    }
    protected getNombreReal(): string {
        console.log("getNombreReal Vengador (protegido)")
        return this.nombreReal
    }

}

// cuando no se DEFINE el constructror de un HIJO
// toma por default el constructor del PADRE
class Xmen extends Vengador {
}

class Shield extends Vengador {
    constructor(a: string, b: string) {
        console.log("Constructor Shield llamado")
        super(a, b)
    }

    // los metodos PROTECTED del PADRE solo puede ser llamados desde la SUBCLASE hija, no desde el objeto del hijo
    // para poder llamarlo desde el objeto tendriamos que llamarla desde un metodo public (puede ser con el mismo nombre)
    public getNombreReal(): string {
        console.log("getNombreReal Shield (public)")
        // para llamar al  padre , se usa SUPER
        return super.getNombreReal();
    }
}

// let ciclope: Vengador = new Vengador("Ciclope", "Scott");
// let storm: Xmen = new Xmen("Penny", "Carter");
let juvilo: Shield = new Shield("jeje", "JOJO");

console.log(juvilo.getNombre());        // llamo un metodo PUBLIC del padre 
console.log(juvilo.getNombreReal());    // llamo un metodo PROTECTED del padre, desde un metodo public del HIJO
