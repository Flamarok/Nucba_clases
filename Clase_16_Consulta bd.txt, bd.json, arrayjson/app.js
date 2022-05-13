const btnAbrirTXT = document.querySelector("#abrirTxt")

btnAbrirTXT.addEventListener('click', obtenerDatos)

function obtenerDatos() {
const url = 'data/datos.txt' // para facilitar y si es que hay que hacer varios fetch (consultas) a una misma direccion 
    fetch(url)
        .then(res => {
            // console.log(res.text()) toma el primer res.text y lo devuelve al primer console log
            /* console.log(res.status)
            console.log(res.statusText)
            console.log(res.type)
            console.log(res.url) */
            return res.text() // devuelve el texto para mostrarlo en el proximo then
        })
        .then(datos => {
            /* console.log(datos); muestra en consola*/
            mostrarHTML(datos) // muestra en el html
        })
        .catch(error => {
            mostrarHTML(error) // pagina de error
        })
};

/* capturar el error y dejarlo de forma amigable */

function mostrarHTML(datos) {
    const body = document.querySelector("body")
    const parrafo = document.createElement("p")
    parrafo.textContent = datos
    body.appendChild(parrafo)
}
