console.log("Hola");
document.addEventListener("DOMContentLoaded", function () {
    console.log("Dom Cargado");
});
console.log("Bye");

// onload

console.log("Hola");

window.onload = () => {
    console.log("Dom Cargado");
};

console.log("Bye");

// Mouse evento . cuando se pasa el mouse por el elemento indicado (ej nav) envia una notificacion evento.

const nav = document.querySelector("body > div > header > nav");
nav.addEventListener("mouseenter", ()=> {
    console.log("Entrando al nav");
    nav.style = "font-size:25px;";
});

nav.addEventListener("mouseoute", () => {
    console.log("Saliendo del nav");
    nav.style = "background: red;";    
});
 
// Click evento . cuando se clickea en el elemento indicado (ej nav) envia una notificacion evento o modificacion.
nav.addEventListener("click", modificarEstilos());
// la funcion se ejecturará automaticamente cargada la pag.
function modificarEstilos() {
    console.log("Entrando al nav");
    nav.style = "background: blue;";
}

// scroll cuenta los scroll
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // se guarda los scrolls en el eje Y.
    if (scrollY >= 1500) {
        console.log(scrollY);    
    };
    //sirve para ejecutar algo al llegar a dicha distancia. (Ej).
});


// query Selector para una clase y getBoundingClientRect()
const premium = document.querySelector(".premium")  // query selector para elemento con clase unica (si hay mas lo aplica solo al primero con esa clase).   
const ubicacion = premium.getBoundingClientRect();
console.log(ubicacion);
if (ubicacion.top > 760) {
    alert("El elemento ya esta visible");
} else {
    console.log("El elemento no esta visible");
};

// Evento blur
const input = document.querySelector(".busqueda"); // por clase o por copiar el copy selector.
input.addEventListener("blur", (event) => {  // el parametro event puede tener cualquier nombre e o event
   // console.log(event);
    console.log("Compueba que se ejecuta el blur");
    event.target.pleaceholder = "Nuevas modificaciones del pleace holder";// entrar a una caracteristica del elemento (target en este caso) y lo modifica cuando se desenfoca.
    event.target.style.backgound = "pink"; 
    event.target.className = "nombre de clase";
});

// Evento focus (usamos la constante anterior del blur)
input.addEventListener("focus", (e) => {
    e.target.style.backgound = ""; // volvera al color ya definido.
    e.target.pleaceholder = "Campo obligatorio"; // dara el mensaje cuando se haga click sobre el input
});

// si ponemos las modificaciones por funciones separadas hya que ponerle a la funcion el parametro e o event
function enfocar(e) {
    e.target.style.backgound = ""; 
    e.target.pleaceholder = "Campo obligatorio"; 
};

input.addEventListener("focus", enfocar); // la variable e es implicita, js lo interpreta.

// Evento input
const input1 = document.querySelector(".busqueda");
input.addEventListener("input", (e) => {
    console.log(e.target.value);
    if (e.target.value === ""){ // si apreto y borro todo
        console.log("Debe completar el campo");
        e.target.style.backgound = "pink";
    } else {
        e.target.style.backgound = ""; //Vuelve al color normal
    }
});