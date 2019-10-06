// Los archivos de DEFINICIOn , nos permiten usar librerias en JS . como si fueran  de TypeScript

// Instalar jquery desde npm 
//           npm install jquery

// Ahora debemos instalar el archivo de Definicion 
//           npm install -D @types/jquery

// Luego modificar el SystemJs  para  que lo encuentre al Transpilar  a JS

//          SystemJS.config({
//              baseURL: "/js",
//              map: {
//                  "jquery": "../node_modules/jquery/dist/jquery.min.js"
//              },
//                       defaultJSExtensions: true  // para que reconozca la EXTENSION, si no bota error
//          });
//          SystemJS.import("app.js")


import "jquery";
import Swal from 'sweetalert2';

console.log("Hola mundo")

$(document).ready(function () {
    console.log("pagina  esta cargada");
    $("h1").text("Hola desde TypeScript")
    $("p").text("Hola typescript desde el parrafo");
    $("h1").css("background-color", "red");
})

$("#botAlerta").on("click", function () {
    Swal.fire('Any fool can use a computer')

    // alert("Hola Mundo desde TypeScript");
})