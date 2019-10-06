function nombreCompleto(nombre: string, apellido: string, capitalizado: boolean = false) {
    console.log(void 0 === undefined)
    // parametro DEFAUlt ... traduccion en JS seria esta
    // if (capitalizado === void 0) { capitalizado = false }  

    console.log("capitalizado 1 :: ", capitalizado)
    return nombre + " " + apellido;
}

let nombre = nombreCompleto("tony", "stark")
console.log("nombre completo ::", nombre)

// ================================================
function capitalizar(palabra: string): string {
    return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase()
}

function fullName(nombre: string, apellido: string, capitalizado: boolean = false): string {
    if (capitalizado) return capitalizar(nombre) + ' ' + capitalizar(apellido)
    else return nombre + " " + apellido;
}
let nombreSinCapitalizar = fullName("BARry", "ALLEN")
console.log("SinCapitalizar:: ", name)
let nombreCapitalizado = fullName("BARry", "ALLEN", true)
console.log("Capitalizado:: ", name)




