// Las enumeraciones tiene 3  medidas, si no se especifica el valor estas seran de 1 en 1 :: min = 1, medio = 2, max = 3
enum Volumen {
    min = 3, medio = 7, max = 10
}

let audio: number = Volumen.min; // 3
audio = Volumen.medio; //   7

console.log(Volumen[7]);  // medio
console.log(Volumen["medio"])   // 7

//Enumeraciones
enum Colores {
    violeta = 0,
    rojo = 1,
    azul = 5,
    verde = 100
}
let _coloresAzul = Colores.azul;  // 5
let _coloresVerde = Colores.verde;  //100
let _coloresRojo = Colores.rojo; // 1
let _coloresVioleta = Colores.violeta; // 0