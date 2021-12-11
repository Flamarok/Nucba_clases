// Ejercicio 1
/*
let texto = prompt ("Ingrese un texto");
if(texto.indexOf('a') != -1 || texto.indexOf('A') != -1 ){
alert("la letra a encontrada");
}
else {
    alert ("la letra a no fue encontrada");
}

/*
if(texto.includes("a"))
{
    alert("El texto contiene una a");
}else
{
    alert("No contiene a");
}
*/


// Ejercicio 2
/*
let texto = prompt ("Ingrese un texto");
alert (texto.toLowerCase());
alert (texto.toUpperCase());
*/

// Ejercicio 3
/*
let texto = prompt ("Ingrese un texto");
alert(texto.slice(0,1));   // tira las letras desde donde empieza hasta donde se indique, en este caso la primera letra.
*/

// Ejercicio 4
/*
let texto = prompt ("Ingrese un texto");
alert (texto.length);
*/

// Ejercicio 5
/*
let numero = prompt ("Ingrese un número");
alert (numero.length);
*/

// Ejercicio 6
/*
let texto = prompt ("Ingrese un texto");
let longitud = texto.length;
alert (texto.charAt(longitud -1));
*/

// Ejercicio 7
/*
let texto = prompt ("Ingrese un texto");
alert (texto.replaceAll(" ", "*"));
*/

// Ejercicio 8
/*
let texto = prompt ("Ingrese un texto");
let letra = prompt ("Ingrese una letra");
if(texto.indexOf(letra) != -1 ){
    alert("la letra " + letra + " encontrada");
    }
    else {
        alert ("la letra " + letra + " no fue encontrada");
    }
*/

// Ejercicio 9 
/*
let texto = prompt ("Ingrese un texto");
alert(texto.slice(1)) // para mostrar todo el texto menos la primera letra.
*/

// Ejercicio 10
/*
let nombre = prompt ("Ingrese su nombre en minúscula");
alert (nombre.toUpperCase().charAt(0) + nombre.slice(1));
*/


// Ejercicios Condicionales (Parte 1)
// Ejercicio 1
/*
let medidaEnMetros = prompt ("Ingrese su medida en Metros ");
let medidaEnPies = parseFloat (medidaEnMetros) * 3.28084 ;
let medidaEnPulgadas = parseFloat (medidaEnMetros) * 39.3701 ;
let medidaEnCentimetros = parseFloat (medidaEnMetros) * 100 ;
let comprobacion = Number.isFinite(parseFloat(medidaEnMetros)); // para todo número finito (Number.isFinite)
if (comprobacion == true ) {
    alert ("Pies= " + medidaEnPies.toFixed (2) + ("ft") + "\nPulgadas= " + medidaEnPulgadas.toFixed (2) + ("in") + "\nCentímetros= " + medidaEnCentimetros.toFixed ("2") + ("cm"));
}
else {
    alert("Error Nan"); 
}
*/

// Ejercicio 2
/*
let edad = prompt ("Ingrese su edad ");

if (edad < 18) {
    alert("es menor de edad");
} else {
    alert("es mayor de edad")
}
*/

// Ejercicio 3
/*
let sabores = prompt("Digame sus sabores");
let confirmacion = prompt("Quiere covertura de chocolate?");

if (confirmacion.toLowerCase() == "si") {
    alert("su helado sabor " + sabores + " con cobertura de chocolate cuesta $180");
}
else {
    alert("su helado sabor " + sabores + " sin cobertura de chocolate cuesta $150")
}
*/

// Ejercicio 4
/*
let primerNumero = prompt ("Ingrese el primer número");
let segundoNumero = prompt ("Ingrese el segundo número");
let resultado =  parseFloat (primerNumero) + parseFloat (segundoNumero);

console.log("El resultado de la suma es: " + resultado);

resultado /= 2; // es igual a hacer resultado = resultado / 2;

console.log("El resultado de la suma es: " + resultado);

if (parseInt(resultado) == resultado) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar") 
}

*/

// Ejercicio 5 
/*
let numero = prompt ("Ingrese un número");

if (numero < 0) {
    alert("El número es negativo");
} else if (numero > 0) {
    alert("El número es positivo");
} else {
    (alert("El número es cero"))
}

*/

// Ejercicio 6 
/*
let monto = prompt ("Ingrese cantidad de dinero");

if (monto > 2000){
    let descuento  = monto - monto*0.1;
    alert("Total a pagar= " + descuento);
} else {
    alert("Total a pagar= " + monto);
}
*/

// Ejercicio 7
/*
let texto = prompt ("Ingrese un texto");
let posicion = prompt ("Ingrese un numero de posición");

let letra = texto.slice(posicion-1,posicion);
letra = letra.toLowerCase();

if (letra == "a" || letra == "e" ||  letra == "i" || letra == "o" || letra == "u" ) {
    alert("la letra seleccionada es vocal");
} else {
    alert("la letra seleccionada no es vocal");
}
*/

// Ejercicio 8
/*
let nota = prompt ("Ingrese su nota");

if (nota <= 3) {
    alert("Aplazado");
} else if (nota >= 4 && nota <= 5) {
    alert("Reprobado");
} else {
    alert("Aprobado");
}
*/

// Ejercicio 9 
/*
let numeroUno = prompt ("ingrese primer numero");
let numeroDos = prompt ("ingrese segundo numero");

if (numeroUno > numeroDos) {
    alert("El primer valor es mayor");
} else if (numeroUno == numeroDos) {
    alert("Los valores son iguales");
} else {
    alert("El segundo valor es mayor");
}
*/

// Ejercicio 10
/*
let mes = prompt("Ingrese un mes del 1 al 12");
alert(new Date(2021, mes, 0).getDate()); 
// new date sirve para ingresar un nueva fecha, "tipo let" 
// num_año num_mes num_día(pusimos 0 para que tome el ultimo dia del mes anterior)
*/

// Ejercicio 11 
/*

let numeroUno = prompt("Ingrese un numero");
let numeroDos = prompt("Ingrese otro numero");
let numeroTres = prompt("Ingrese el ultimo numero");

if (numeroUno > numeroDos && numeroUno > numeroTres) {
    alert("El primer numero es mayor");
} else if (numeroDos > numeroUno && numeroDos > numeroTres) {
    alert("El segundo numero es mayor");
} else if (numeroTres > numeroUno && numeroTres > numeroDos) {
    alert("El tercer numero es el mayor");
} else {
    alert("Hay numeros iguales")
}

*/

// Ejercicio 12
/*
let edad = prompt("ingrese su edad");
let bebida = prompt("Ingrese una bebida. Entre Cerveza $50, jugo $10 y agua $1");
alert("NO SE FIA, NO INGRESAR NUMEROS NEGATIVOS")


if (bebida.toLowerCase() == "cerveza" && edad < 18) {
    alert("Prohibida su venta a menores de edad");
} else {
    let monto = prompt("¿Con cuanto dinero pagará?");
    if (bebida.toLowerCase() == "cerveza") {
        monto -= 50;
        alert("Su vuelto será " + monto);
    } else if (bebida.toLowerCase() == "jugo") {
        monto -= 10;
        alert("Su vuelto será " + monto);
    } else if (bebida.toLowerCase() == "agua") {
        monto -= 1
        ;
        alert("Su vuelto será " + monto);
    }
*/

// Ejercicio 13

let mes = prompt("Ingrese un mes del 1 al 12");
if (mes == 1) {
    alert("Enero");
}else if (mes == 2) {
    alert("Febrero");
}else if (mes == 3) {
    alert("Marzo");
}else if (mes == 4) {
    alert("Abril");
}else if (mes == 5) {
    alert("Mayo");
}else if (mes == 6) {
    alert("Junio");
}else if (mes == 7) {
    alert("Julio");
}else if (mes == 8) {
    alert("Agosto");
}else if (mes == 9) {
    alert("Septiembre");
}else if (mes == 10) {
    alert("Octubre");
}else if (mes == 11) {
    alert("Noviembre");
}else if (mes == 12) {
    alert("Diciembre");
}
