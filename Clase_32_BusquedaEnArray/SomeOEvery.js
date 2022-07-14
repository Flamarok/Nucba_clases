const carrito = [
    {nombre: 'Ventilador', precio: 500 },
    {nombre: 'Televisor', precio: 400 },
    {nombre: 'Calefactor', precio: 350 },
    {nombre: 'Tablet', precio: 1500 },
    {nombre: 'Celular', precio: 2500},
    {nombre: 'Teclado', precio: 800},
]

// Some: true si ALGUINO cumplen con la condicion.

const resultado = carrito.some(car => car.precio < 300)
console.log(resultado)

// Every: true si TODOS cumplen con la condicion 

const resultado2 = carrito.every(car => car.precio <= 2500)
console.log(resultado2) // true
const resultado3 = carrito.every(car => car.precio < 2500)
console.log(resultado3) // false ya que