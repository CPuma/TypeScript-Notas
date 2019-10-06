
// ASÍDECLARAMOS metodos en un Objeto
// >          getNombre: () => string 
let acuaman: { nombre: string, edad: number, poderes: string[], getNombre: () => string } = {
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