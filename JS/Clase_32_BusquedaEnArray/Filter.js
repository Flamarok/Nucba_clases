// Sistema utilizado para actividad de pizza

const carrito = [
    {nombre: 'Ventilador', precio: 500 },
    {nombre: 'Televisor', precio: 400 },
    {nombre: 'Calefactor', precio: 350 },
    {nombre: 'Tablet', precio: 1500 },
    {nombre: 'Celular', precio: 2500},
    {nombre: 'Teclado', precio: 800},
]

let resultado 

// resultado = carrito.filter(car => car.precio >= 450)
// resultado = carrito.filter(car => car.precio < 450)
// resultado = carrito.filter(car => car.nombre !== "Televisor") // quita "televisor" del nuevo array
// resultado = carrito.filter(car => car.nombre === "Televisor") // Encuentra el valor y lo guarda en el nuevo array
// resultado = carrito.filter(car => car.precio > 300).filte(car.precio < 500)
                // resultado = carrito.filter(car => menorPrecio(car)).filte(car.precio < 500)

function menorPrecio(car) {
    if(car.precio > 300) {
        return car
    }    
}