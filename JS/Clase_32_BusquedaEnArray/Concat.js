const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]
const meses2 = ["Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const resultado = meses.concat(meses2)
const resultado3 = meses.concat(meses2, meses3, "Nuevo Valor", false, 256) // igual que el spead operator


const resultado2 = [...meses, ...meses2]
console.log(resultado2)