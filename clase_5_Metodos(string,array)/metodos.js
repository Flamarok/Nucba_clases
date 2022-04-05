// Metodos de string

// Lenght
/*
var nombres = "pablo";

console.log(nombres.length);
*/

// toUpperCase
/*
var nombre = "Nucba";
console.log(nombres.toUpperCase());
*/

// toLowerCase
/*
var nombre = "NUCba";
console.log(nombres.toLowerCase());
*/


// split, funcion flecha, con una constante para que no lo modifique nadie. Pone mayuscula las inciales
/*
const capitalizeName = (names) => {
    const splitNames = names.split(' '); //separa los nombres en 2 o + elementos, formando una array.
    let fullName = '';  // en un let para que se guarda momentaneamente para devolver resultado.
  
    for (let index = 0; index < splitNames.length; index++) {
        const capitalizeFirstLetter = splitNames[index].split('')[0].toUpperCase(); // separa al primer nombre en una array de sus letras y toma la primera letra (0) y le hace uppercase
        const namesSplit = splitNames[index].split('');
        namesSplit[0] = capitalizeFirstLetter; // remplaza la primera letra del nombre por cada mayuscula
        fullName = `${fullName} ${namesSplit.join('')}`; // concatena los valores anteriores ej Pedro = Pedro Gonzalez = Pedro Gonzalez Ramirez.
    }
  
    return fullName.trim(); // limpia espacios de mas
  };

  console.log(capitalizeName('pedro gonzalez'));
*/

// replace
/*
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

*/

// replace all
/*

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

*/ 

// typeof
/*

var miFuncion = new Function("5+2");
console.log(typeof miFuncion === "function");

*/

// *****************Metodos de string

// to string
/*
var array = ["hola", 235, "mundo", false];

array.toString();
*/

// push
/*
var array = ["hola", 235, "mundo", false];
array.push(25);
*/

// concat

/*
var miArray = ["hola", 3];
var otroArray = ["buenaas", 59];

miArray.concat(otroArray);

var elements3 = ["perro", "casa"];
// otra manera de concat
var elements4 = [...otroArray,...elements3,"Pedro"];

*/

// Slice
/*

const animals = ["ant", "bison", "camel", "duck", "elephant"];

animals.slice(2, 4);

/*