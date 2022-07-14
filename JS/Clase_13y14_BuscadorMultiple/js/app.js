// RECORDAR 'autos' VIENE DE LA BASE DE DATOS

//VARIABLES
const resultado = document.querySelector('#resultado'); // hara referencia al div donde tiraremos los datos de la base de datos.
const year = document.querySelector('#year');// hacemos referencia a este selector para agregarle un appendChild y en este guardar todas las opciones de años. el id esta predefinido por el profe en el html.
const  marca = document.querySelector('#marca'); 

const maxYear = new Date().getFullYear; // crea un objeto de fecha con el año actual. el
const minYear = maxYear - 10;  

//EVENTOS
document.addEventListener("DOMContentLoad", () => {  // apenas cargue la pag ejecutara lo que se encuentre dentro.
    /* console.log("Cargado el DOM"); */
    mostrarAutos(autos);
    llenarSelect()
});

// Objeto de Busqueda: va a estar vacio para completarlo con los valores de busqueda que comparará con los objetos de la base de dato.
const datosDeBusqueda = {
    marca: '',
    modelo: '',
    year: '',
    minimo: 0,
    maximo: 0,
    puertas: '',
    color: '',
    transmision: ''
}

/* una manera de hacerlo parte por parte. La otra con el backstick es mas rapida.
function mostrarAutos() {   
    console.log(autos);  // trae el objeto autos (realizado por el profe). Se suele utilizar promesas o api
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');    // armaresmos un codigo html
        autoHTML.textContent = Auto: ${.auto.marca} - Modelo: ${auto.modelo} ´// backstik para que se utilice la variable y el objeto
        
        resultado.appendChild(autoHTML); // muestra lo que esta en la base de datos. la marca de los autos.
    });
} */

/* function mostrarAutos() {   
    // console.log(autos);   trae el objeto autos (realizado por el profe). Se suele utilizar promesas o api
    autos.forEach(auto => {
        const { marca, modelo, puertas, year , precio, color, transmision } = auto
        autoHTML.textContent = `Auto: ${marca} - Modelo: ${modelo} - Puertas: ${puertas} - Año ${year} - Precio: ${precio} - Color: ${color} - Transmision: ${transmision}` ; // backstik para que se utilice la variable y el objeto
        
        resultado.appendChild(autoHTML); // muestra lo que esta en la base de datos. 
    });
}
 */

function llenarSelect() {
    for(let i= maxYear.lenght; i < minYear; i--) {
        const opcion = document.createElement('option');  // este option esta en el html. va a ir generando cada campo de año en el selector
        opcion.value = i; // igual a i porque guarda cada valor del año
        opcion.textContent = i
        year.appendChild(opcion)
    }
};

function limpiarHtml() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
};

// Filtrado filtrara segun los selectores indicados y los valores de estos.
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
    mostrarAutos(resultado) // Mostrara los objetos, y cuando le colocamos el parametro resultado (reescrito del comienzo), mostrara los autos con los valores de la constante resultado filtrados.
}

function filtrarMarca(auto) { // Le pasamos un objeto. Esta funcion realiza la busqueda para luego ser filtrada y comparada arriba.
    if(datosDeBusqueda.marca) {
        return auto.marca === datosDeBusqueda.marca
    } else {
        return auto
    }
};

function filtrarYear(auto) {
    if (datosDeBusqueda.year){
        return auto.year === datosDeBusqueda.year
    } else {
        return auto
    }
};

 
/* Como ultimo paso modificamos el forEach y le agregamos al mostrarAuto() el parametro(autos). Pero tirará error debido al DOMContentLoad del inicio.

Limpia el arbol de los elementos que va a ir mostrando el filtrado debido a que se reescribe el objeto auto.
*/
function mostrarAutos(autos) {   
    // console.log(autos);   trae el objeto autos (realizado por el profe). Se suele utilizar promesas o api
    autos.forEach(auto => {
        limpiarHtml()
        const { marca, modelo, puertas, year , precio, color, transmision } = auto
        autoHTML.textContent = `Auto: ${marca} - Modelo: ${modelo} - Puertas: ${puertas} - Año ${year} - Precio: ${precio} - Color: ${color} - Transmision: ${transmision}` ; // backstik para que se utilice la variable y el objeto
        
        resultado.appendChild(autoHTML); // muestra lo que esta en la base de datos. 
    });
}

  //Listener
marca.addEventListener('change',(e) => { // evento que hace referencia al cambio de los elementos del selector
    datosDeBusqueda.marca = e.target.value;
    filtrarAuto()                        // cuando uso la e puedo utilizar el e.target.value y darme el valor del queryelector elegido.
});

year.addEventListener('change',(e) => { // evento que hace referencia al cambio de los elementos del selector
    datosDeBusqueda.year = e.target.value;
    filtrarAuto()                        // cuando uso la e puedo utilizar el e.target.value y darme el valor del queryelector elegido.
});

