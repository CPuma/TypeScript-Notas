class Figura<T> {
    base: T;
    altura: T;
    area(): number {
        // Casteamos a NUMBER anteponinedo +
        return +this.base * +this.altura;
    }
}

let cuadrado = new Figura();
cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area())

let rectangulo = new Figura();
rectangulo.base = "10";        // aceptado
rectangulo.altura = "aaa";   // aceptado PERO no puede mutiplicarse es NaN
console.log(rectangulo.area())  // "NaN" -- pero no botara error

// =========================SOLUCION==================================
// solucion EXTENDEr de NUMBER .  para que acepte solo numero

class Figura2<T extends number | string> {
    base: T;
    altura: T;
    area(): number {
        // Casteamos a NUMBER anteponinedo +
        return +this.base * +this.altura;
    }
}


let rectangulo2 = new Figura2<number>();
rectangulo2.base = 10;        // aceptado
rectangulo2.altura = "10";   // ERROR

let rectangulo3 = new Figura2<number | string>();
rectangulo3.base = 10;        // aceptado
rectangulo3.altura = "10";   // aceptado
rectangulo3.altura = true;   // ERROR


let rectangulo4 = new Figura2<number | string | boolean>();  // error por que no se ESPECIFICO boolean como EXTEND del generico


