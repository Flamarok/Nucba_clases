// 
alert("Hola Mundo!");
prompt("Que día es hoy?");

// Vamos a ver variables
// viejo estilo
var estoEsUnaVariable = "Hola!";
// El scope es global

//Desde ES6+ (la version de javascript)
let estoEsOtroSaludo = "Bajale la espuma a tu chocolate"; // scope local.
const esteEsElSaludoFinal = "Chau!"; // scope local y global, pero no puede ser modificado.

// Vamos a Saludar
// Declaro una constante para guardar el nombre del usuario.
const nombre = prompt("¿Cual es tu nombre?");
// Uso un alert para saludar concatenando con la variable nombre.
alert("Hola " + nombre);

//Vamos a crear una calculadora
const primerNumero = prompt("Introduci un numero");
const segundoNumero = prompt("Introduci otro numero");
const resultadoSuma = primerNumero+segundoNumero;
alert("La suma es: " + resultadoSuma)
// Los datos aquí son tomados como strings 