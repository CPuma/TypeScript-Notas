"use strict";
// Los archivos de DEFINICIOn , nos permiten usar librerias en JS . como si fueran  de TypeScript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
require("jquery");
var sweetalert2_1 = __importDefault(require("sweetalert2"));
console.log("Hola mundo");
$(document).ready(function () {
    console.log("pagina  esta cargada");
    $("h1").text("Hola desde TypeScript");
    $("p").text("Hola typescript desde el parrafo");
    $("h1").css("background-color", "red");
});
$("#botAlerta").on("click", function () {
    sweetalert2_1.default.fire('Any fool can use a computer');
    // alert("Hola Mundo desde TypeScript");
});
