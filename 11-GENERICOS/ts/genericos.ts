// CON GENERICOS
// typescript igual nos ayuda. ya que detecta el tipo de valor  y nos AYUDA
function caminar<T>(arg: T) {
    return arg;
}

console.log(caminar(15.456789).toFixed(2));
console.log(caminar("Ricardo Tapia").charAt(0));
console.log(caminar(new Date()).getTime());
console.log(caminar(Date.now()).toFixed(2));



// SIN GENERICO
// No sabemos si se puede aplicar el mismo toFixed a todos o NO .. PROBOCANDO ERRORES

function regresar(arg: any) {
    return arg;
}

console.log(regresar(15.456789).toFixed(2));    // si me deja pro que es number
console.log(regresar("Ricardo Tapia").toFixed(2));             // ERROR no es number
console.log(regresar(new Date()).toFixed(2));
console.log(regresar(Date.now()).toFixed(2));