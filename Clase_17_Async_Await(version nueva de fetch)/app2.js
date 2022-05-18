function descargarCliente() {
    console.log('Descargando Cliente...')
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve('Cliente descargado')            
        }, 5000)
    })
}

function descargarProductos() {
    console.log('Descargando Productos...')
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve('Productos descargado')            
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

/* Tarea agregar el reject en cada promesa y permutar los errores */