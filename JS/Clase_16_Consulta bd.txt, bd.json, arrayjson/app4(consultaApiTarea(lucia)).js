const api = document.querySelector("#cargarApi");
api.addEventListener('click', mostrarDatos);

function mostrarDatos() {
const url = "https://jsonplaceholder.typicode.com/photos" 
    fetch(url)
        .then(res => res.json())
        .then(datos => mostrarHTML(datos))
}


function mostrarHTML(fotos) {
    const body = document.querySelector('body')
    const section = document.createElement('section')
    section.classList.add('cards-component')
    body.appendChild(section)
    fotos.forEach(foto => {
        const { title, thumbnailUrl } = foto
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <img src="${thumbnailUrl}"> 
        <h2>${title}</h2>
        `
        // pega la imagen y el titulo
        section.appendChild(card)
    });
}
