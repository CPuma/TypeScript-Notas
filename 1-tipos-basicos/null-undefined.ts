// tsconfig
// IF  "stricNullChecks === true" ... esto es  FALSE  
// ELSE ...  esto es TRUE
let vacio: null = undefined;

// BEST PRACTICE   stricNullChecks  esta activo 


let nada: undefined = undefined;
// nada = "Hola mundo "   // error
nada = null     // error

let nada2: null = null;
nada2 = undefined;  // error

// AVERIGUAR MAS SOBRE EL TEMA Y EL 

