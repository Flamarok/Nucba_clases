const jsonArray = document.querySelector('#abrirJSONArray');
jsonArray.addEventListener('click', mostrarDatos)

function mostrarDatos() {
    const url = 'data/nombres.json'

    fetch(url)
    .then(res => res.json())
    .then(datos => mostrarHTML(datos))
}


//Es una especie de push

    function mostrarHTML(nombres) {
    nombres.map(nombre => {
        const {name, username, address: {city}} = nombre
        const body = document.querySelector('body')
        const div = document.createElement('div')
        

        div.innerHTML = `
        <div class='nombre'>Nombre: ${name} </div>
        <div class='usuario'>Usuario: ${username} </div>
        <div class='ciudad'>Ciudad: ${city} </div>
        `

        body.appendChild(div)
    })
}


/* // del profe
function mostrarHTML(nombres) { //no desestructura porque es array
    console.log(nombres);
    const body = document.querySelector("body")
    // const div = document.createElement("div") /

    // itera para mostrar la array de objetos
    // si no se hace un array vacio pisa objeto por objeto y muestra solo el ultimo
    let div = ''
    nombres.map(nombre => {
        const {name , username, address: {city}} = nombre
        div += `
        <hr> 
        <div class="nombre"> Nombre: ${name} </div>
        <div class="direccion"> Dirección: ${city}} </div>
        <div class="username"> Usuario: ${username} </div>
    `
    })
    body.innerHTML = div
}
*/