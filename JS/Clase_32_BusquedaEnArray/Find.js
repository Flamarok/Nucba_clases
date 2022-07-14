const carrito = [
    {nombre: 'Ventilador', precio: 500 },
    {nombre: 'Televisor', precio: 400 },
    {nombre: 'Calefactor', precio: 350 },
    {nombre: 'Tablet', precio: 1500 },
    {nombre: 'Celular', precio: 2500},
    {nombre: 'Teclado', precio: 800},
]

// Encontrar internamente con un forEach y devuelva el objeto completo
let resultado = ''

carrito.forEach((car, i) => {
    if(car.nombre === 'Calefactor') {
        resultado = car
    }
})
 
// o tambien:
carrito.forEach((car, i) => {
    if(car.nombre === 'Calefactor') {
        resultado = carrito[0]
    }
})

console.log(resultado)


// Metodo Find

let resultado2 = carrito.find(car => car.nombre === 'Calefactor')
console.log(resultado2)