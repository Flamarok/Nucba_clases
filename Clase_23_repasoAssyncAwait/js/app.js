import API from './api.js'
import * as UI from './interfaz.js' // importa TODO (con el *) desde interfaz, con el alias (as) UI

UI.formularioBuscar.addEventListener("submit", buscarCancion)

function buscarCancion(e) {
    e.preventDefault()
    
   /*  const artista = document.querySelector('#artista').value //captura el valor del iunput y lo guarda en la constante
    const cancion = document.querySelector('#cancion').value // lo pasamos a interfaz para que se importe con UI*/

    const busqueda = new API(UI.artista.value, UI.cancion.value) // lo ponesmos en una constante asi poder ver la instancia y ver los valores.

    busqueda.consultarAPI()

}