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
/*
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
/*

/*1. Bonus
let claveIngresada = prompt("Ingrese su clave de seguridad");
if (clave == claveIngresada) {
    let monto = prompt("Su balance es de $" + balance + ". Ingrese el monto a retirar");
    if (monto < balance) {
        balance = balance - monto;
        alert("Su balance es de $" + balance);
    } else {
        alert("No puede retirar más dinero del que tiene disponible")
    }
} else {
    alert("Ingreso una clave incorrecta")
}
*/


/*2. Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.
let dia = prompt("Ingrese su día de nacimiento");
let mes = prompt("Ingrese su mes de nacimiento (en número)");
if ((dia >= 21 && mes == 3) || (dia <= 20 && mes==4 )) {
    alert('Aries');
} else if((dia >= 21 && mes == 4)||(dia <= 21 && mes == 5)){
    alert('Tauro');
} else if((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) {
    alert('Géminis');
} else if((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7)) {
    alert('Cáncer');
} else if((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) {
    alert('Leo');
} else if((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
    alert('Virgo');
} else if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) {
    alert('Libra');
} else if((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)) {
    alert('Escorpio');
} else if((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
    alert('Sagitario');
} else if((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) {
    alert('Capricornio');
} else if((dia >= 21 && mes == 1)||(dia <=19 && mes == 2)) {
    alert('Acuario');
} else if((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) {
    alert('Piscis');
} else {
    alert("No es una fecha válida");
}
*/       


//3. Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días. 
/*
let nombre = prompt("Ingrese su nombre");
let hora = prompt("Ingrese la hora (Ej.: 19.20)");

if (hora >= 12 && hora < 19) {
    alert("Buenas tardes " + nombre);
} else if (hora >= 19 || hora < 5) {
    alert("Buenas noches " + nombre);
} else {
    alert("Buenos días " + nombre);
}

*/

 //  Bucles

/*Ejercicio 1
    let clave = 4523;
    let balance = 10000;
    let eleccion = 0
    let claveIngresada = prompt ("Ingrese su clave de seguridad");

    do {
        if (clave == claveIngresada) {
            let monto = prompt("Su balance es de $" + balance + ". Ingrese el monto a retirar");
        if (monto < balance) {
            balance = balance - monto;
            alert("Su balance es de $" + balance);
            eleccion = prompt("ingrese 1 si quiere seguir operando o ingrese 0 si quiere salir.");
        } else {
            alert("No puede retirar más dinero del que tiene disponible");
            eleccion = prompt("Ingrese 1 si quiere seguir operando o ingrese 0 si quiere salir.");
        } 
        } else {
            alert("Ingreso una clave incorrecta")
        }
} while (eleccion === 1);
*/

/* Ejercicio 2

for (let index = 0; index < 10; index++) {    
    document.write(index + 1 + " ");
}

/*

/* Ejercicio 3 

let auxiliar = 0;

for (let index = 0; index < 5; index++) {
    let numero1 = prompt(`Ingrese el número n° ${index + 1}`);
    auxiliar = parseFlow(numero1) + auxiliar;
    
}

alert(`La suma de tus números es de `+ auxiliar);

*/

/* Ejercicio 4 

let auxiliar = 0 
let variableNumero = prompt("¿Cuantos números desea ingresar?")

for (let index = 0; index < variableNumero; index++) {
    let numero1 = prompt(`Ingrese el número n° ${index + 1}`);
    auxiliar = parseFlow(numero1) + auxiliar;
    
}

alert(`La suma de tus números es de `+ auxiliar);
*/

/* Ejercicio 5 

let auxiliar = 0; 
let index = 1;

do {
    var numero1 = prompt("Ingrese el número n° " + index + ". Si quiere dejar de sumar ingrese 0");
    auxiliar = parseInt(numero1) + auxiliar;
    index++ 
} while (numero1 > 0);
alert("La suma de tus números es de " + auxiliar);
*/

/*Ejercicio 6 

let auxiliar = 0; 
let index = 1;


do {
    var numero1 = prompt("Ingrese el número n° " + index + ". Si quiere dejar de sumar ingrese 0");
    numero1.toLowerCase();
    if (numero1 == "t") {
        auxiliar = auxiliar / (index - 1);
    } else {
        auxiliar = parseInt(numero1) + auxiliar;
        index++
    }
    
} while (numero1 != "t");

alert("El promedio de tus números es de " + auxiliar);
*/

/*Ejercicio 6 

let numeroIntroducido = prompt("Introduzca un número");
numeroIntroducido = parseInt(numeroIntroducido);

for (let index = 0; index < numeroIntroducido; index++) {
    document.write((index + " "));
}

*/

/* Ejercicio 7 

let numeroIntroducido = prompt("Introduzca un número");
let numeroIntroducidoDos = prompt("Introduzca el segundo número");
numeroIntroducido = parseInt(numeroIntroducido);
numeroIntroducidoDos = parseInt(numeroIntroducidoDos);

for (let index = numeroIntroducido; index < numeroIntroducidoDos; index++) {
    document.write((index + " "));
}

*/ 

/* Ejercicio 8 

let numeroDeseado = prompt("Ingrese la cantidad de números que desea ingresar.");
numeroDeseado = parseInt(numeroDeseado);
let auxiliar = 0;

for (let index = 0; index < numero; index++) {
    var numero = prompt("Ingrese el número " + (index + 1));
    numero = parseInt(numero);

    if (numero > auxiliar) {
        auxiliar = numero;
    }
}

alert("El número mayor es " + auxiliar);
*/

/* Ejercicio 9 

let numeroDeseado = prompt("Ingrese la cantidad de números que desea ingresar.");
numeroDeseado = parseInt(numeroDeseado);
var auxiliar = Number.POSITIVE_INFINITY;

for (let index = 0; index < numero; index++) {
    var numero = prompt("Ingrese el número " + (index + 1));
    numero = parseInt(numero);
    

    if (numero < auxiliar) {
        auxiliar = numero;
    }
}

alert("El número menor es " + auxiliar);

*/

/* Ejercicio 10  

let contador = prompt("Ingrese un número.");

for (let index = 0; index < contador; index++) {
    document.write("*");
}

/*

/* Ejercicio 11 
let base = prompt("Ingrese la base.");
let exponente = prompt("ingrese el exponente.");

base = parseInt(base);
exponente = parseInt(exponente);
let auxiliar =0;

for (let index = 0; index < exponente--; index++) {

    base = base * auxiliar;

}

*/

/* Ejercicio 12 

let numero = prompt ("Ingrese un número");
numero = parseInt(numero);
let auxiliar = 0; 
for (let index = numero; index > 1 ; index--) {
    numero= auxiliar * (index-1);
}

alert("El resultado es " + número);

*/

/* Ejercicio 13 

let numero = prompt ("Ingrese un número");
numero = parseFloat(numero);

for (let index = numero; index > 1; index--) {
   let resto = numero % index;
   if(resto === 0) {
       console.log(index);
   }
}

*/

/* Ejercicio 14 

let numero = prompt("Ingrese un número.");
numero = parseInt(numero);

let cadena = prompt("Ingrese una frase.");

for (let index = 0; index < numero ; index++) {
    console.log(cadena.charAt(index))
}

*/

/* Ejercicio 15 


*/ 

/* Ejercicio 15 x2 
var aux = 1;
        do{
            var items = prompt("ingrese item de la lista. Si desea finalizar la lista escriba un punto.");
            
            if(items != "."){
                if(aux === 1){
                    document.write(items);
                }else {
                    document.write("," + items);
                }
            }
            aux++;
        }while(items !== ".")
        
        console.log(aux);
*/

/* Ejercicio 16  revisar */

numero = parseFloat(numero);
let resultadoUno = numero % numero;
resultadoUno = parseFloat(resultadoUno);

let resultadoDos = numero % 1;
resultadoDos = parseFloat(resultadoDos);



while (resultadoUno != 0 && resultadoDos != 0) {
    let numero = prompt("Ingrese un número.");
}
