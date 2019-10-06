class Perro {
    constructor(public raza: string, public edad: number) { }
}

abstract class Mutante {
    constructor(public nombre: string, public nombreReal: string) {

    }
}

class Feos extends Mutante {
}

// let javier = new Mutante(); // ERROR -> no se puede CREAR una instancia de una clase ABSTRACT
let spike = new Feos("Spike", "Pancho");  // si se puede extender (HEREDAR sus propiedades)
console.log(spike)


console.log(spike instanceof Mutante)
console.log(spike instanceof Feos)
console.log(spike instanceof Perro)
console.log(spike instanceof Object)
console.log(spike instanceof Function)

// console.log(typeof spike === "object");

