// Tipos
let _batman: string = "Bruce";
let _superman: string = "Clark";

let _existe: boolean = false;

// Tuplas
let _parejaHeroes: [string, string] = [_batman, _superman];
let _villano: [string, number, boolean] = ["Lex Lutor", 5, true];

// Arreglos
let _aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

//Enumeraciones
enum Fuerza {
  acuaman = 0,
  batman = 1,
  flash = 5,
  superman = 100
}
// let _fuerzaFlash = 5;
let _fuerzaFlash = Fuerza.flash;
// let _fuerzaSuperman = 100;
let _fuerzaSuperman = Fuerza.superman;
// let _fuerzaBatman = 1;
let _fuerzaBatman = Fuerza.batman;
// let _fuerzaAcuaman = 0;
let _fuerzaAcuaman = Fuerza.acuaman;

// Retorno de funciones
function actilet__batiseñal(): string | any {
  return "activada";
}

function pedir_ayuda(): void {
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let _poder1: string = "100";
let _largoDelPoder1: number = (_poder1).length;
console.log(_largoDelPoder1);

let _poder2: number = 100;
let _largoDelPoder2: number = _poder2.toString.length;
console.log(_largoDelPoder2);

let _poder3: any = 100;
let _largoDelPoder3: number = (<string>_poder3).length;
console.log(_largoDelPoder3);
