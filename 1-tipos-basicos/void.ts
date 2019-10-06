// any = cualquier tipo

// VOID = NINGUN TIPO  .. retorno de una function

// Una funcion que NO RETORNA nada, RETORNA -> UNDEFINED
function llamar_batman(): void {    // nos aseguramos que NO RETORNE NADA
    console.log("Mostrar la batiseñal")
}

let mensaje = llamar_batman(); // undefined


// ERROR, void NO puede RETORNAR NADA
function llamar_superman(): void {
    return "Hola"
}