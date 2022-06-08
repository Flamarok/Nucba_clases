// import { consultarAPI } from './consultaAPI.js'

import { consultarAPI } from "./consultaAPI.js"
import { mostrarError } from "./error.js"

const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')
const container = document.querySelector('.container')

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e) {
    e.preventDefault()
    console.log('Buscando Clima');
    const ciudad = document.querySelector('#ciudad').value
    const pais = document.querySelector('#pais').value
    if (ciudad === '' || pais === '') { // si esta vacio el campo muestra el error en un p y se lo adjunta al DOM
        const alerta = container.appendChild(mostrarError("El campo no puede estar vacio"))
        setTimeout(() => {
            alerta.remove // lo elimina despues de 5 segundos al mensaje
        }, 5000)
    }
    const data = consultarAPI(ciudad, pais)
    console.log(data);
}
/* 
Validacion para que no envien input vacios 
Mostrar valores en el DOM 
temp: 283.15
temp_max: 283.15
temp_min: 283.15
Para mostrar en Grados Celcius restar 273.15
Mostrar un cartel de error que dure aprox 5 segundos
*/