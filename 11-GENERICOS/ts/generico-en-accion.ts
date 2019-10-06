function functionGenerica<T>(arg: T) {
    return arg;
}

type Heroe = {
    nombre: string;
    nombreReal: string;
}

type Villano = {
    nombre: string;
    poder: string;
}

let deadPool = {
    nombre: "DeadPool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneracion"
}
// Al definir el Tipo Generico exacto , typeScript solo nso dejara acceder a las propiedades del Typo que Determinamos
console.log(functionGenerica<Heroe>(deadPool).nombre)
console.log(functionGenerica<Heroe>(deadPool).nombreReal)
// Deal pool Heroe no puede Acceder a su PODER
console.log(functionGenerica<Heroe>(deadPool).poder) // ERROR


console.log(functionGenerica<Villano>(deadPool).nombre)
console.log(functionGenerica<Villano>(deadPool).poder)
// Deal pool VILLANO no puede Acceder a su nombreREAL
console.log(functionGenerica<Villano>(deadPool).nombreReal) // ERROR