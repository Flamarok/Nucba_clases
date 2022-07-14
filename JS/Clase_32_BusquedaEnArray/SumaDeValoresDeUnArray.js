const carrito = [
    {nombre: 'Ventilador', precio: 500 },
    {nombre: 'Televisor', precio: 400 },
    {nombre: 'Calefactor', precio: 350 },
    {nombre: 'Tablet', precio: 1500 },
    {nombre: 'Celular', precio: 2500},
    {nombre: 'Teclado', precio: 800},
]


// Sumar todos los precios mediante forEach
let total = 0
carrito.forEach(prod => total += prod.precio) // Suma en la variable "total" los precios de los elementos del carrito (arreglo de objetos)

// Con un Reduce
const resultado2 = carrito.reduce((total, resultado) => total + resultado.precio, 0) // el 0 es desde donde comienza a sumar (indice 0)


