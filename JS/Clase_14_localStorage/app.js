// Almacenarlo en el localStorage 
localStorage.setItem('nombre', 'Franco Anderson');

const producto = {
    nombre: 'Shampoo',
    cantidad: 5
}

const strProduct = JSON.stringify(producto)  // transforma el valor de objeto a string

const meses = ['Enero', 'Febrero', 'Mazro']

const strMeses= JSON.stringify(meses)  // trasforma el objeto array a string
localStorage.setItem('meses', strMeses)  // almacenamiento del elemento (palabra clave) y su valor

// Sacarlo del localStorage (para leer y utilizar)

const localMeses = localStorage.getItem('meses') // trae el elemento y lo almacena en una Variable
const strLocalMeses = JSON.parse(localMeses) // se crea otra variable donde se guardará la transformacion del elemento en formato string recien traido a un objeto.


// Remover Item
localStorage.removeItem('nombre')  // palabra clave del elemento que queremos borrar


//  Agregar un valor al elemento
strLocalMeses.push('Abril');
localStorage.setItem('meses', JSON.stringify(strLocalMeses)); // debo volver a setear/guardar al localstorage el valor string al elemento 

// NO HAY ACTUALIZACION; SE HACE MANUALMENTE