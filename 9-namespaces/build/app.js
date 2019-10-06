// Los NAmeSpace nos permitiran encapsular  las interface clases logica o funciones.para no  GENERAR ERRORRES, con otras partes del sistemas que usen clases,funciones, etc  diferentes pero con el mismo nombre
// Es como una clase donde todos sus propiedaes o metodos son Staticos PERO
// debemos de EXPORTARLO  para usarlos desde AFUERA
// namespace Validaciones1 {
//     function validarTexto(texto: string): boolean {
//         if (texto.length > 3) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     export function fechasValidas(fecha: Date): boolean {
//         if (isNaN(fecha.valueOf())) {
//             return false;
//         } else {
//             return true;
//         }
//     }
//     console.log("Desde DEntro", validarTexto("Barry Allen"));
//     let hoy = new Date();
//     console.log("Desde DEntro", fechasValidas(hoy))
// }
// // console.log("Desde AFUERA", Validaciones1.validarTexto("Ba")); // ERRROR POR QUE NO FUE EXPORTADO
// let hoy = new Date();
// console.log("Desde AFUERA", Validaciones1.fechasValidas(hoy))    // OK Si lo encuentra ,si fue exportado
