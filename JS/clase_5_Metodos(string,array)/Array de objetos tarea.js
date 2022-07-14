let dias = "lunes, martes, miercoles, jueves, viernes, sabado, domingo";

// a): Longitud del string.
console.log(dias.length);

// b): String en mayúsculas.
console.log(dias.toUpperCase());

// c): Reemplazar TODAS las comas por guion medio.
console.log(dias.replaceAll(",", " -"));

// d): Mediante un método de los strings, devolver un array. Cada elemento del array, debe ser un día de la semana.
console.log(dias.replaceAll(",", "").split(' '));



let mes1= ["enero", "febrero", "marzo", "abril", "mayo", "junio"]; 
let mes2= ["agosto", "septiembre", "octubre", "noviembre", "diciembre"];
/*

 
 

-Aprovechando la función constructora "Zapatillas" desarrollada en el ejercicio anterior, crear un array de objetos que contenga las zapatillas que construimos anteriormente. (Si es necesario, puede copiar y pegar la función constructora y los objetos). 
No crear el array de manera manual, hacerlo con las herramientas que nos provee JS (bucles, push, etc).
*/

// a) Siempre utilizando métodos, devolver un array que contenga los 12 meses del año.

let año = mes1.concat(mes2);
console.log(año);

// b) Utilizando mes1, devolver un array que contenga solo desde "febrero" hasta "abril", inclusive.
console.log(mes1.slice(1, 4));

// c) Utilizando mes1, devolver un array que contenga solo los meses que tienen mas de 4 letras en su nombre.
function mesDe4Letras() {
    var mes1= ["enero", "febrero", "marzo", "abril", "mayo", "junio"]; 
    var mesDe4 = mes1.filter(mes1 => (mes1.length > 4));
    return mesDe4
  }

console.log(mesDe4Letras())
