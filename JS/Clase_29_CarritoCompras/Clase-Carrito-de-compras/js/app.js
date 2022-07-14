import { carritoHTML } from "./carrito.js"
import * as v from "./variables.js"

export let articulosCarrito = []


document.addEventListener('DOMContentLoaded', () => {
    v.listaCursos.addEventListener('click', agregarCurso)

    v.carrito.addEventListener('click', eliminarElemento)

    v.vaciarCarritoBTN.addEventListener('click', eliminarTodosLosCursos)
})

export function agregarCurso(e) {
    e.preventDefault()
    // console.log(e.target.classList.contains('agregar-carrito'));
    if (e.target.classList.contains('agregar-carrito')) {
        // console.log(e.target.parentElement.parentElement);
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

function leerDatosCurso(curso) {
    // console.log(curso);
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // console.log(infoCurso);
    // Agregar elementos al arreglo del carrito

    // console.log(articulosCarrito);
    
    // Sumar cantidades
    
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id) // fija si es que existe o no y devuelve un booleano
    // crea condicional para que no muestre el mismo elemento muchas veces en el carrito, asi los suma
    if (existe) {
        articulosCarrito.map(curso => {
            // necesitamos modificar el cantidad
            if(curso.id === infoCurso.id)  {
                curso.cantidad++
                return
            }
        })
        //si existe no lo agrega
    } else {
        // si no existe lo agrega
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    carritoHTML(articulosCarrito)
}

// la siguiente funcion no hacerla fuera del archivo de la app, debido a que "articulosCarrito" es un let y pierde globalidad.

function eliminarElemento(e) {
    const eliminar = e.target.matches('.borrar-curso') // captura el click en el "eliminar" del elemento del carrito
    console.log(eliminar);
    if (eliminar) {
        const cursoID = e.target.getAttribute('data-id')
        /* console.log(articulosCarrito) */
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID) // crea un array con los objetos cuyo id no coincida con cursoID, se borra el elemento porque se pisa con el nuevo array
        /* console.log(articulosCarrito) */
        carritoHTML(articulosCarrito)
    }
}


// hacemos un evento al boton de vaciar carrito, cuando hacemos click llama la funcion de abajo
//esta funcion consulta si el class name es igual a esa clase, la variable articulos del carrito (objeto que almacena los cursos, lo sobre-escribe dejandolo vacio y deja sin propiedades la funcion carrito html)
function eliminarTodosLosCursos(e) {
    if(e.target.className === "button u-full-width") {
        articulosCarrito = [];
        carritoHTML(articulosCarrito)
    }
}

//  "button u-full-width" clase del boton de vaciar carrito