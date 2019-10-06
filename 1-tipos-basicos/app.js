var esSuperman = true;
var esBatman;
var esAcuaman = true; // no Recomendable
if (esSuperman) {
    console.log("Estamos salvados!!");
}
else {
    console.log("Opss!!");
}
function convertirClark() {
    return false; // OK
    // return 'jeje';   // ERROR . no se puede escribir un String en un boolean
}
esSuperman = convertirClark();
