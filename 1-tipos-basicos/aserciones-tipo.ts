// SIRVE PARA CASTEAR TIPOS DE DATOS y obtener la ayuda, al decirle que tipod e valor sabemos que estamos recibiendo , pero que no fue especificado al declararlo

let cualquierValor: any = "Cualquier cosa";

let largoDelString: number = (<string>cualquierValor).length;

console.log(largoDelString)


let poder1: string = "100";
let largoDelPoder1: number = (poder1).length;
console.log(largoDelPoder1);

let poder2: number = 100;
let largoDelPoder2: number = poder2.toString.length;
console.log(largoDelPoder2);

let poder3: any = 100;
let largoDelPoder3: number = (<string>poder3).length;
console.log(largoDelPoder3);