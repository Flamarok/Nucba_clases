// crear card en html con js (las clases dadas son ya creadas en html y utilizadas en css).
const parrafo1 = document.createElement("p"); // entre comillas va el elemento a crear, en este caso un p (parrafo).
parrafo1.textContent = "Deportes";
parrafo1.classList.add("Categoria");
parrafo1.classList.add("Paseo"); // se le suma a la clase categoria llevando las 2.
// tambien se puede hacer parrafo1.classList.add("Categoria", "Paseo");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Experimenta lo mejor";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "2500 mensuales";
parrafo3.classList.add("precio");

const info = document.createElement("div"); // padre de los parrafos
info.classList.add("info");
info.appendChild(parrafo1); // con el metodo apprendChild se le agrega los hijos al nodo padre.
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const img = document.createElement("img");
img.textContent = "No disponible";
img.src = 'img/newyok4.img';

// Div contenedor de toda la card
const contenedorCard = document.createElement("div");
contenedorCard.classList.add('card');
info.appendChild(img);
info.appendChild(info);

// Ubicar card en el DOM (en este caso en el contenedor donde se encuentran el resto de las cards, pero en el ultimo lugar)
cont contenedorDeTodasLasCards = document.querySelector('.hacer .contenedor-cards'); // o ubicacion por copy selector.
contenedorDeTodasLasCards.appendChild(contenedorCard);

// Ubicar en el Dom mediante Insert Before (este lo inserta en el lugar que deseemos en el orden de las otras cards)
