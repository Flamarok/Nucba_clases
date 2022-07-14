const valor = false

function descargarCliente() {
    console.log('Descargando Cliente...')
    return new Promise ((resolve, reject) => {
        setTimeout( ()=> {
            if (valor) {
                resolve('Cliente descargado')            
            } else {
                reject('El Cliente no se ha descargado')
            }    
        }, 5000)
    })
}

function descargarProductos() {
    console.log('Descargando Productos...')
    return new Promise ((resolve, reject) => {
        setTimeout( ()=> {
            if (!valor) {
                resolve('Productos descargado')            
            } else {
                reject('Los Productos no se han descargado')
            }
        }, 3000)
    })
}

// 2 promesas

/* const app = () => {
    const clientes = descargarCliente()
    console.log(clientes);
    const productos = descargarProductos()
    console.log(productos);

    // se colocan así para poder ver el estado de las promesas
}

app() */

// Ahora veamos el async await y try catch

const app = async () => {
    try {
        const clientes = await descargarCliente()
        console.log(clientes);
        const productos = await descargarProductos()
        console.log(productos);
    } catch (error) {
        console.log(error);
    }
}
// este caso una linea debe esperar por la otra, el await hace que espere a que termine y luego siga la otra. devuelve en orden

app()

const app2 = async () => {
    try {
        const respuesta = await Promise.all([descargarCliente(), descargarProductos()]) //  promise.all([])devuelve los resultados de consultas de una promesa sola o de las indicadas. Recordar esas funciones son promesas en su interior.
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }
}

// este ultimo al utilizar un solo await muestra todo al mismo tiempo, aunque una promesa deba esperar a la otra para mostrar su resultado. Devuelve todo al mismo tiempo

/* Tarea agregar el reject en cada promesa y ejecutar*/

const app3 = async () => {
    try {
        /* const respuesta = await Promise.all([descargarCliente(), descargarProductos()])
        console.log(respuesta); */
        // llama a las dos promesas la promesa que va al reject, bloquea la aparicion de la promesa resolv 
        // hay que utilizar la siguiente manera
        const respuesta = await Promise.allSettled([descargarClientes(), descargarProductos()])
        mostrarHTML(respuesta)
    } catch (error) {   
        console.log(error)       
    }
}

function mostrarHTML(respuesta) {
    const body = document.querySelector('body')
    respuesta.map(dato => {
        // console.log(dato.value);
        const title = document.createElement('h3')
        title.textContent = dato.value
        body.appendChild(title)
    }) // hace un recorrido ya que las promesas son una array de objetos y necesitamos tomar el valor 
}
