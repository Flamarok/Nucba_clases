/* console.log(1 + 1);
try {
    autenticarUsuario(); //no existe la funcion
} catch (error) {
    console.log(error)
}

console.log(2 + 2);

// sin el try catch, el proceso se detendria al primer error como en este caso: 
console.log(1 + 1);
autenticarUsuario();
console.log(2 + 2); */

function autenticarUsuario() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(()=> {
            if (error){
                resolve('Usuario Autenticado')
            }else{
                reject('Usuario no registrado')
            }
        }, 3000)
    }) // simula consulta a api
}

// Async await :
function ejecutar() {
    try {
        console.log(1 + 1);
        autenticarUsuario(); // simulacro de consulta con fetch
        console.log(2 + 2);
    } catch {
        console.log()
    }
}

ejecutar()

async function ejecutar() {
    try {
        console.log(1 + 1);
        const respuesta =  await autenticarUsuario(); 
        console.log(respuesta)
        console.log(2 + 2);
    } catch (error){
        console.log()
    }
}

