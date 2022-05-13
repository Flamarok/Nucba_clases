// Funcionamiento de un callback
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

function mostrarMeses() {
    meses.forEach(mes => {console.log(mes)}); // asi se recorre un array
}


// asi se consulta a una API, promesas y async
function mostrarMeses() {
    setTimeout(()=>{
        meses.forEach(mes => {console.log(mes)}); 
    }, 3000) // dos parametros para funcionar, una funcion y parametro variable del tiempo, milisegundos
}

function nuevoMes(mes, callback) {
    setTimeout(() => {
        meses.push(mes)
        callback()
    }, 3000)
};

mostrarMeses()
nuevoMes("Mayo", mostrarMeses)
// muestra los meses despues de 3seg, y nuevo mes, agrega mayo y hace el callback mostrando los meses con mayo sumado


// DECLARAR PROMESA
const aplicarDescuento = new Promise((resolv, reject)=>{
    const dto = true // como si fuera consulta a API
    if (dto) {
        resolve('Descuento aplicado')     // dará este resultado ya que la constante es true
    }else {
        reject('Descuento NO aplicado')
    }
});
// esto no solo es sobre la base de dato, si el usuario ingresa un cupo y no cumple con la condicion del cupon y su uso por parte del usuario.

aplicarDescuento.then(res =>{
    console.log(res);
})
.catch(error=> {
    console.log(error);
}) 
//.then: Cuando resuelva hará lo siguiente. funciona como cualquier elemento de js (ej .forEach, .map). Se puede sar varios .then. res trae el mensaje del resolv. 
//.catch: Cuando rechaza hara esta parte. error trae el mensaje del reject


// Existen 3 estados de una promesa
/*
Fulfilled => Cuando la promesa se cumplio.
Rejected => Cuamdo la promesa NO se cumplio.
Pending => Cuando no se utiliza o tarda demasiado, o incluso no esta completa.
*/ 



/* Crear con Javascript un código para que se pueda mostrar en el DOM la info que devuelve la promesa */

