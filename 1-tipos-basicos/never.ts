// El tipo de dato NEVER representa un valor que nunca puede suceder
// Sirve para declarar PUNTOS CRITICOS, 
// LINEAS DE COGIDO Q NUNCA DEBEN SUCEDER
function error(mensaje: string): never {
    throw new Error(mensaje)
}


error("Error critico ... linea 8 alcanzada")