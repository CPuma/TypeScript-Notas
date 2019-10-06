function parametro(target: any, metodo: string, index: number) {
    console.log("parametro", target, metodo, index)
}

class Minion {
    constructor(public nombre: string) {

    }

    // SE EJECUTYA cuando el  navegador VE LA FUNCIOn ... no cuando es llamada. 
    imprimir(plan: boolean, @parametro mensaje: string): void {
        if (plan) {
            console.log("El plan es " + mensaje);
        } else {
            console.log(mensaje)
        }
    }
}


