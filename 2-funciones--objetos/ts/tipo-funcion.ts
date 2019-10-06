function sumar(a: number, b: number): number {
    return a + b;
}

function saludar(nombre: string): string {
    return "I am " + nombre;
}

function salvarMundo(): void {
    console.log("El mundo esta salvado!")
}
// MALLLLL ..Mi funcion puede tomar cualquier VALOr . generando futuros ERRORES
let miFunction;
miFunction = 10;
console.log(miFunction)
miFunction = sumar;
console.log(miFunction(5, 5))
miFunction = saludar;
console.log(miFunction("Batman"))
miFunction = salvarMundo;
miFunction()

// BIEN  ... Especificando la entrada y saluda de MI funcion  . SE puede CONTROLAR mejor
let noEsUnaFuncion = 10;
console.log(noEsUnaFuncion)

let funcionSuma: (x: number, y: number) => number;
funcionSuma = sumar;
console.log(funcionSuma(5, 5))

let funcionSaludo: (x: string) => string;
funcionSaludo = saludar
console.log(funcionSaludo("Batman"))

let funcionVacia: () => void;
funcionVacia = salvarMundo;
funcionVacia()