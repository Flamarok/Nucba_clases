var dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
];

var acumulador = 0;

for (let i = 0; i < 7; i++) {
  if (dias[i]) /* cuando no haya mas elemento deja de contar */ {
    ac++ ;
  } 
}

console.log('Contador es: ' ,ac);

/* ----------------------------------------------------------- */
/*
 // Declarado local
function sumar() {
  var n1 = 25;
  var n2 = 50;
  var resultado = 0;
  resultado = n1 + n2;
  console.log("el resultado es: " + resultado);
}
*/

function sumarDos(n3, n4) {
    var resultado = 0;
    resultado = n3 + n4;
    return resultado;
  }
  
  /*
  
  
  var resultadoFuncion = sumarDos(25, 50);
  console.log("resultado de la funcion " + resultadoFuncion);
  */
  
function multiplicar() {
    var resultadoFuncion = sumarDos(n3, n4);
    var localMultiplicar = 2 * resultadoFuncion;
    return localMultiplicar;
  }
  

  
var resultadoMultiplicacion = multiplicar(5, 4);
console.log("El resultado total es: " + resultadoMultiplicacion);
  
/*
function multiplicar(numero1, numero2) {
  var resultado = numero1 * numero2;
  return resultado;
}

var resultadoDeFuncion = multiplicar(2, 5);
console.log("El resultado es " + resultadoDeFuncion);

*/

// Funcion flecha
/*
var sumar = () =>{
  var n1 = 25;
  var n2 = 30;
  var resultado = n1 + n2;
  return resultado;
};

// opcion de llamdo:
  // console.log(sumar())

  var resultado_sumar = sumar();
  console.log(resultado_sumar);
*/

// Funcion flecha con parametros:
/*

var sumar = (n1, n2) =>{
    var resultado = n1 + n2;
    return resultado;
  };
  
  var resultado_sumar = sumar(5,9);
  console.log(resultado_sumar);
  
/*