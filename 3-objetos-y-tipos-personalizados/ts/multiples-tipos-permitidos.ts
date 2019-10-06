type Villano = {
    nombre: string,
    edad: number,

}
// Mutiples tipos pertmitidos.
let loquesea: string | number | Villano = "Cesar";
loquesea = 10;
loquesea = {
    nombre: "Flash",
    edad: 56
};
