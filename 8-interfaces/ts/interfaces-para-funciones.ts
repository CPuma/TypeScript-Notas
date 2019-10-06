interface DosNumerosFun {
    (num1: number, num2: number): number;
}

let sumar: DosNumerosFun;
sumar = function (a: number, b: number) {
    return a + b;
}

let restar: DosNumerosFun;
restar = function (numero1: number, numero2: number) {
    numero1++;
    numero1++;
    return numero1.toString();      // ERROR, se esta devolviendo un STRING,  Y la interface DICe que se Retorna un Number
}