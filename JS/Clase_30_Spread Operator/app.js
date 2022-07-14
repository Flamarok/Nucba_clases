const list = [1,2,3]
const list2 = [4,5,6]

/* const resultado = list.concat(list2) */


// Nuevo en javascript

/* const resultado = [list, list2] // devuelve 1 array con 2 array */
/* const resultado = [...list, list2] // devuelve 1 array con 2 array */

const resultado = [...list, ...list2] // devuelve 1 array nuevo con los elementos concatenados, igual que el list.concat(list2)

// tambien se puede concatenar y agregar elementos: const resultado = [...list, ...list2, 7, 8, 9] 

// ej clase anterior articulosCarrito = [...articulosCarrito, infoCurso];


//MEtodo estatico
function suma(n1, n2, n3) {
    const resultado = n1 + n2 + n3
    console.log(resultado);
}

//Metodo Dinamico

function suma(...numeros) {
    const sumatoria = numeros.reduce((rev, current) => prev + current)
    return sumatoria
}
//suma(lista[0], lista[1], lista[2])

const sumar = suma(...lista2, 5, 6, 7)
const sumar2 = suma(list[0], list[2], list[5])

const sumar3 = suma(list[0], list[2], list[5], 25, "Ariel", false) // suma los numeros y el resto lo concatena

// Objetos y Spread Operator

const direccion = {
    calle:'Mejico',
    altura: 1500
}
/* 
const persona = {
    nombre: 'Ariel', 
    apellido: 'Tecay'
} */

//concatenar 2 objetos 

const persona = {
    ...direccion,
    nombre: 'Ariel', 
    apellido: 'Tecay',
    estudios: {
        secundario: true,
        universitario: true
    }
}

// se accede asi
console.log(persona.estudios)
console.log(persona.estudios.secundario)
console.log(persona.direccion)

// ingresar o modificar valor
persona.estudios.secundario = false
console.log(persona.estudios.secundario)

direccion.calle = 'BS AS' // En persona seguira diciendo mejico, ya que no hace referencia, sino una copia

