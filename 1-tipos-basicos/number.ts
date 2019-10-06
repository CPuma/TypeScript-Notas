let avengers: number = 5;
let villanos: number;
let otros = 2;  // no recomendable

if (avengers > villanos) { // error, villano es UNDEFINED
    console.log("Estamos salvados")
} else {
    console.log("Estamos muertos")
}


otros = 123;
otros = 123.12;
otros = "123"; // Error . String no es number