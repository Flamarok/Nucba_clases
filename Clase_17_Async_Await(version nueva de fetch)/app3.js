const url = "asdgdsgsdg"
const body= document.querySelector("body")


document.addEventListener("DOMContentLoaded", obtenerDatos)



function obtenerDatos() {
    fetch(url)
        .then(datos => datos.json())
        /* .then(photos => console.log(photos)) // recordar que los console.log debe ser uno solo ya que captura el ultimo */
        .catch(error => console.log(error))
    }

/* // esta funcion es igual a:
function descargarCliente() {
    console.log('Descargando Cliente...')
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve('Cliente descargado')            
        }, 5000)
    })
} */

// esta fetch se hace asi con async await