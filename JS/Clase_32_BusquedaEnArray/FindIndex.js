
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]

const carrito = [
    {nombre: 'Ventilador', precio: 500 },
    {nombre: 'Televisor', precio: 400 },
    {nombre: 'Calefactor', precio: 350 },
    {nombre: 'Tablet', precio: 1500 },
    {nombre: 'Celular', precio: 2500},
    {nombre: 'Teclado', precio: 800},
]

meses.forEach((mes, i) => {
    if(mes.toLowerCase() === "enero") {
        console.log(`El mes se encuentra en el indice ${i}`);
    }
})

// Encontrar el indice

const indice = meses.findIndex(mes => mes.toLowerCase() == 'Abril') // si colocamos "===" poner el mes en minuscula
console.log(indice)
/* en el findIndex si un elemento no es encontrado dara como resultado -1 

if(indice !== -1) {

}

este if puede servir para mostrar algun error en el caso de que no se encuentre el indice del elemento o por ende el elemento en ele array
 */

// Buscar un indice de un arreglo de objetos
const indice2 = carrito.findIndex(car => car.nombre.toLowerCase() === 'teclado')
console.log(indice2);
