
import { mostrarError } from './error.js'
import { limpiarHTML } from "./cleanHTML";
import {kelvinToCelsius} from "./kelvinToCelsius";
import {spinner} from "./spinner";

const resultado = document.querySelector('#resultado')

export function consultarAPI(ciudad, pais) {
    const apiKEY = 'a9b5d5325cd4991a94fdb41e987d7725'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKEY}`
    console.log(url);
    limpiarHTML()
    spinner()
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod === 400 ) {
                mostrarError('No existe la ciudad');
            }
            // console.log(data);
           /*  console.log(data.main); */
           mostrarClima(data)
        })
}

function mostrarClima(datos) {
    console.log(data);
    const { main: {temp, temp_min, temp_max}, weather: [{icon, description}], sys : {country}, name} = datos;
     //weather esta asi porque es un arrelgo de objetos
    limpiarHTML()
    const mostrarDatosClima = document.createElement('div')

    mostrarDatosClima.style = 'display:flex; align-items:center; justify-content:center; color:white; flex-direction:column;'
    mostrarDatosClima.innerHTML = `
    <h3> Nombre de la ciudad: ${name} </h3>
    <h2> Pais: ${country} </h2>
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png"> 
    <div> Temperatura: ${kelvinToCelsius(temp)} </div>
    <div> Temperatura min: ${kelvinToCelsius(temp_min)} </div>
    <div> Temperatura max: ${kelvinToCelsius(temp_max)} </div>
    `
    resultado.appendChild(mostrarDatosClima)

    // el icon se coloca en este lugar ya que icon es un codigo el cual representa la imagen dentro de la api
}


