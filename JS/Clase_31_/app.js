const variables = [10, 10, 5, 25, 40, 5, 2, 1, 6, 8]
/* 
const carrito = new Set()
//este add corresponde a una propiedad de Set
carrito.add("Funcionamiento")
carrito.add("Funcionamiento2")
carrito.add("Funcionamiento3")
carrito.add("Funcionamiento4")
console.log(carrito)

console.log("Tamaño", carrito.size) // muestra el tamaño
console.log(carrito.has('Funcionamiento3')) // muestra si hay un elemento con dicho nombre dentro
carrito.delete('Funcionamiento4')
carrito.clear() // Limpia todo el objeto (ideal para un carrito)

noDuplicados = new Set(variables) */
/* ************************************** */
// 


/* ********************************** */
// yo
function buscarDuplicados(numeros) {
    const duplicado = [];
    numeros.map(numero => {
        let array = []
        array.push(numero)
        if (numero == array) {
            duplicado.push(numero)
        }   
    });
    return duplicado ;
}

console.log(buscarDuplicados(variables)) 

const var2 = []