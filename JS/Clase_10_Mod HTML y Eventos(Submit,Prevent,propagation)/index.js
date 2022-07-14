//Repaso clase 9
const input1 = document.querySelector(".busqueda");
input.addEventListener("input", (e) => {
    /* console.log(e.target.value); */
    if (e.target.value === ""){ // si apreto y borro todo
        console.log("Debe completar el campo");
        e.target.style.backgound = "pink";
    } else {
        e.target.style.backgound = ""; //Vuelve al color normal
    }
});

// Evento Submit
const form = document.querySelector(/* #formulario */); // el id del formulario
form.addEventListener("submit", ejecutarAPI);

function ejecutarAPI(e) {  // esta funcion permitira ver los consol log del evento submit de arriba. 
    e.preventDefault();
    console.log(e);
}; 

// Evento 
const cardDiv = document.querySelector(".card"); // elegimos utilizar una card como ejemplo
const bandaDiv = document.querySelector(".banda");
const precioDiv = document.querySelector(".precio");

cardDiv.addEventListener("click", (e) => { // captura los clicks hechos en el elemento seleccionada para el evento.
    e.stopPropagation();
    console.log("Click en Card"); // mensaje que quedará cuando se haga el evento click
}); 

bandaDiv.addEventListener("click", (e) => { 
    e.stopPropagation();
    console.log("Click en Banda"); 
});  


precioDiv.addEventListener("click", (e) => { 
    e.stopPropagation();    
    console.log("Click en Precio"); 
});      
 