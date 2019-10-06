import { fechasValidas } from './creando-namespace';
// Puede haber varios archivos CON EL MISMO NAMESPACE
// tsconfig  ENGLOBA todos los NAMESPACE.
// NO NECESITO  IMPORTAR UN NAMESPACE para usarlos . EL TSCONFIG  lo jala AUTOMATICAMENTE

// OPCION 1 
//  LLAMAR los .js compilados de los distintos archivos en el index.html ANTES del app.js
//      < script src = "js/validaciones/fechas.js" > </script>
//      < script src = "js/validaciones/textos.js" > </script>
//      < script src = "js/app.js" > </script>

// OPCION 2
// COMpilar desde la terminal y UNIR los  3 archivos
//          tsc --outFile build/app.js validaciones/fechas  validaciones/texto  app 
// LLamar el .js compilado en el indexedDB.html
//          < script src = "build/app.js" > </script>


// OPCION 3 
// Activar en el tsconfig la opcion : 
//          "outFile": "./build/app.js",
// Juntara TODOS LOS TS en un solo archivo .JS

// OPCION 4 
// IMPORTAR LOS Archivos requeridos  con     /// <references ...
// COMpilar solo el archivo principal (que extraera codigo de las referencias)
//          tsc --outFile build/app.js  app 


// NO USAR NAMESPACE ... DA MUCHOS PROBLEMAS ... USA MODULOS

/// <reference path="validaciones/textos.ts"/>
/// <reference path="validaciones/textos.ts"/>

console.log("Desde APP texto", Validaciones.validarTexto("Ba"));
let mañana = new Date();
console.log("Desde APP Fecha ", Validaciones.fechasValidas(mañana))  