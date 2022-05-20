const url = "asdgdsgsdg"
const body= document.querySelector("body")


document.addEventListener("DOMContentLoaded", /* obtenerDatos o consultaAsync */ )



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

const consultaAsync = async ()=>{
    try {
        const resultado = await fetch(url);
        const resulJson = await resultado.json();
        console.log(resulJson);
        
    } catch (error) {
        console.log(error);
    }
};

const mostrarHTML = (respuesta) => {
    respuesta.map(dato => {
        const div = document.createElement('div')
        div.innerHTML = "<div>ID: "+ dato.id+" </div>" +
        "<div> "+dato.author+" </div>"
        body.appendChild(div)
    })
}

/* //Desestructurado
const mostrarHTML = (respuesta) => {
    respuesta.map(dato => {
        const {id, author} = dato
        const div = document.createElement('div')
        div.innerHTML = "<div>ID: "+ id +" </div>" +
        "<div> "+ author +" </div>"
        body.appendChild(div)
    })
}
 */

/* // con backstick
const url = 'https://picsum.photos/list'
const body = document.querySelector("body")



function mostrarHTML(datos) {
    datos.map( dato => {
        const {author, id, post_url} = dato;
        const html = document.createElement("div")
        html.innerHTML= `
        
            <p> ----------------</p>
            <p> Autor: ${author}</p>
            <p> Id: ${id} </p>
            <a href="${post_url}" target="_blank">ver imagen</a>
            <p> ----------------</p>

        
        `;
        body.innerHTML = html;
    });

}
 */