class Persona {
    constructor() {
// propiedades valores
    }
    metodo() {
// metodo, asignar o mostrar
    }
}


// nueva forma

// Ejemplo con propiedades estaticas
const User = {
    name: "Ariel", // Propiedad
    lastName: "Tecay", //Propiedad
    age: 30, // Propiedad
    showName: function showName()  { //metodo
        //tambien se puede : const {name, lastName, age} = this
        //  return `Nombre: ${name} Apellido: ${lastName} Edad:${age}`
        return `Nombre: ${this.name} Apellido: ${this.lastName} Edad:${this.age}`
    }
}


// para entrar en la funcion showName:
console.log(User.showName())

