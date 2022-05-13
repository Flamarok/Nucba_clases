const btnAbrirJason = document.querySelector("#abrirJSON")
btnAbrirJason.addEventListener('click', obtenerDatos)

function obtenerDatos() {
    const url = 'data/nombre.json'

    fetch(url)
    .then(res => res.json())  // otra manera que puedo hacerlo
        /* console.log(res.json()); */ // comentamos para que no lo capture
    /* .then(console.log) */ // otra manera de mostrarlo en consola
    .then(datos => mostrarHTML(datos));
}


function mostrarHTML(datos) { // o tambien function mostrarHTML({name, username, address: {city}}) y luego no poner la constante
    const body = document.querySelector("body")
    const div = document.createElement("div")
    const {name, username, address: {city}} = nombre
    
    div.innerHTML = `
    <div class="nombre"> Nombre: ${name} </div>
    <div class="direccion"> Dirección: ${city}} </div>
    <div class="username"> Usuario: ${username} </div>
    `
    body.appendChild("div")
}
