class Apocalipsis {
    static instancia: Apocalipsis;
    private constructor(public nombre: string) {    

    }

    static llamarApocalipsis() {
        if (!Apocalipsis.instancia) { // si no hay una Instancia de Apocalipsis
            Apocalipsis.instancia = new Apocalipsis("Soy apocalipsis... el UNICO!")
        }
        return Apocalipsis.instancia;
    }

}

// let apocalipsisFalso = new Apocalipsis("Soy Apocalipsis Falso"); // ERROr - el constructor es  PRIVATE
let apocalipsisReal = Apocalipsis.llamarApocalipsis();

console.log(apocalipsisReal.nombre)