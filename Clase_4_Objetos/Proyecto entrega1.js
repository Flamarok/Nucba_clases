
/*

var ingredientesDePizza = ["queso", "sal", "aceite", "salsa", "harina", "azucar", "agua", "levadura", "tomate", "cebolla"];

function pizza(ingredientesDePizza){
  if (ingredientesDePizza.length % 2 == 0) {
    var par = [ingredientesDePizza];
  } 
  else {
    var impar = [ingredientesDePizza]; 
  } 
  return console.log("Los ingredientes pares son: " + par + "Los ingredientes impares son: " + impar)
}
*/


function pizza(ingredientesDePizza){
    if (ingredientesDePizza.length % 2 == 0) {
        var par = ingredientesDePizza.map(function(x) {
            return x * 2;
        }
    }
}

var ingredientesDePizza = ["queso", "sal", "aceite", "salsa", "harina", "azucar", "agua", "levadura", "tomate", "cebolla"];

