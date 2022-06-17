// constructor de objeto para que sea Dinámico (para toda clase en toda forma siempre primera letra mmayus)
function Person() {
    this.name = '',
    this.lastName = '',
    this.age = 0,
    this.showName = function ()  { //metodo
        //tambien se puede : const {name, lastName, age} = this
        //  return `Nombre: ${name} Apellido: ${lastName} Edad:${age}`
        return `Nombre: ${this.name} Apellido: ${this.lastName} Edad:${this.age}`
    }
}

// Instanciar:

persona1 = new Person()

persona1.Lastname = "Anderson"
persona1.age = 25
persona1.name = "Franco"
// no importa como se ordene la info

/*
function Person(a,b,c){
    this.name = a,
    this.lastName = b,
    this.age = c,
 } 
 generar una funcion fabrica de "personas"

 instancia : persona2 = new PErsona("lucia", "Castro", 26) // importa el orden de como se pasa la info
*/