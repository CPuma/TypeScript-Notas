interface Xmen {
    nombre: string; // PROPIEDAD obligatorio
    poder?: string; // ?  PROPIEDAD OPCIONAL 

    regenerar(): void; //METODO obligatorio
    golpear?(nombreReal: string): void;  // ?  METODO opcional  
}


function enviarMision(xmen: Xmen) {
    console.log("Enviando a : " + xmen.nombre)

}

function enviarCuartel(xmen: Xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre)
    xmen.regenerar();
}

let wolverine: Xmen = {
    nombre: "Logan",
    // poder: "Regeneracion"    // OPCIONAL
    regenerar(): void {  // obligatorio
        console.log("Se ha regenerado " + this.nombre)
    },
    // golpear(nombreReal: string): void { } // opcional
}

enviarMision(wolverine)
enviarCuartel(wolverine)