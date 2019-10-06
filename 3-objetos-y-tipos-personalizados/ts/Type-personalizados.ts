type Heroe = {
    nombre: string,
    edad: number,
    poderes: string[],
    getNombre: () => string
}

let ironman: Heroe = {
    nombre: "Cesar Puma",
    edad: 27,
    poderes: [
        "programador reactivo", "Guapo"
    ],
    getNombre() {
        return this.nombre
    }
}
console.log("Acuaman", acuaman.getNombre())