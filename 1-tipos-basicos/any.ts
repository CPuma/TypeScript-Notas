// Valor Tipo ANY puede ADOPTAR cualquier tipo de dato
let vengador: any = "Superman";
let existe;
let derrotas;

vengador = "Dr Strange";
console.log(vengador.charAt(0));

vengador = 150.55555;
console.log(vengador.toFixed(2));

vengador = true;
console.log(vengador);

// si no se especifica el tipo, SON TIPO ANY
console.log(existe);  // tipo ANY pero UNDEFINED
console.log(derrotas); // tipo ANY pero UNDEFINED