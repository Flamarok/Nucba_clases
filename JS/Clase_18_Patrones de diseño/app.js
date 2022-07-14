// Utilizaremos class pattern & Constructor pattern

/* class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }
}

const persona3 = new Persona("Carlos", 23) */

// Patron Singletton
let instancia = null

class Persona {
    constructor(nombre, edad) {
        if (!instancia /* al estar negado instancia not null */) {
            this.nombre = nombre,
            this.edad = edad,
            instancia = this
        } else {
            return instancia
        }
    }
}



