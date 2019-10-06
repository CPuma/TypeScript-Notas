// IMPORTANTE- 
// ACTIVAR  en tsconfig -> 
//     "experimentalDecorators": true,


function consola1(constructor: Function) {
    console.log(constructor)
}

@consola1
class Villano1 {
    constructor(public nombre: string) {

    }
}

