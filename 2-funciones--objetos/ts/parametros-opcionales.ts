// EN JS todos los parametros son OPCIONES
// EN TS  TOdos los parametros son obligatorios


// TS
function nombreCompleto(nombre: string, apellido?: string): string {
    return nombre + ' ' + apellido
}
let nombre: string = nombreCompleto("Barry", "Allen")
console.log(nombre)     // - Barry

// TS
function nombreCompleto2(nombre?: string, apellido?: string): string {
    if (nombre && apellido) return nombre + ' ' + apellido
    else if (nombre && !apellido) return nombre
    else return 'No ingreso nombre valido :: ' + nombre

}
let nombre2: string = nombreCompleto2("Barry", "Allen")
console.log(nombre2)     // - Barry