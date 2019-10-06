"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { PI } from "./validaciones/numeros";
var numeros_1 = __importDefault(require("./validaciones/numeros")); // se pone cualquier numero y coge la funcion por DEFAULT
// import { MENSAJES } from "./validaciones/textos"
var textos = __importStar(require("./validaciones/textos"));
// console.log(PI)
console.log(numeros_1.default(10, 5));
// console.log(MENSAJES)
console.log(textos.obtenerError(0));
console.log(textos.obtenerError(3));
