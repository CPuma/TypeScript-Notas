// Formas Basicas de declarar funciones
// 1
let heroe: string = "Flash";

function imprime_heroe(): string {
    return heroe;
}
console.log(imprime_heroe())

// 2
let activar_batisenal = function (): string {
    return "Batiseñal activada"
}
console.log(activar_batisenal)