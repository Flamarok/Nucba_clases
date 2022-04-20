
var ingredientes = [
  "masa",
  "tomate",
  "jamon",
  "queso",
  "chedar",
  "oregano",
  "sal",
  "agua",
  "azucar",
  "aceite"
];

function pizzas(ingredientes) {
  
  const ingredientesPares = ingredientes.filter( ingredientes => (ingredientes.length % 2 == 0));
  const ingredientesImpares = ingredientes.filter( ingredientes => (ingredientes.length % 2 != 0));
  console.log("Los ingredientes de letras pares son:" + ingredientesPares + " Y los ingredientes de letras impares son: " + ingredientesImpares);
}

console.log(pizzas(ingredientes))