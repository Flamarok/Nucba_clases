import { nombre, edad, sumar, Persona} from'./suma.js'


const btnSumar = document.querySelector('#sumar')
const input1 = document.querySelector('#n1') 
const input2 = document.querySelector('#n2')


btnSumar.addEventListener("click", mostrarEnHTML)

function operacion() {
    return sumar(parseInt(input1.value), parseInt(input2.value)) 
}

function mostrarEnHTML() {
    const resultado = document.querySelector("#resultado")
    const h1 = document.createElement('h1')
    const valor = operacion()
    h1.innerText = valor
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
    resultado.appendChild(h1)
}