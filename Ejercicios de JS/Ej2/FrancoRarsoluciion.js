
const idImpares = [];
const pizzasBaratas = [];
const nombrePizzas = [];
const precioPizzas = [];
const nombreConPrecio = [];

for (let i = 0; i < pizzas.length; i++) {
  if (pizzas[i].id % 2) {
    idImpares.push(pizzas[i].nombre);
  }
  if (pizzas[i].precio < 600) {
    pizzasBaratas.push(pizzas[i].nombre);
  }
  nombrePizzas.push(pizzas[i].nombre);
  precioPizzas.push(pizzas[i].precio);
}

for (let x = 0; x < pizzas.length; x++) {
  nombreConPrecio.push(nombrePizzas[x]);
  nombreConPrecio.push(" $");
  nombreConPrecio.push(precioPizzas[x]);
  nombreConPrecio.push("; ");
}
console.log(
  "Las pizzas que tienen ID impares son : " +
    idImpares.toString().replaceAll(",", "; ")
);
console.log(
  "Las pizzas con el precio menor a $600 son: " +
    pizzasBaratas.toString().replaceAll(",", "; ")
);
console.log(
  "El nombre de las pizzas son: " +
    nombrePizzas.toString().replaceAll(",", "; ")
);
console.log(
  "Las pizzas cuestan: $" + precioPizzas.toString().replaceAll(",", "; $")
);
nombreConPrecio.pop(); // elimina el ultimo elemento del Array
console.log(
  "Los precios de las pizzas son: " +
    nombreConPrecio.toString().replaceAll(",", "")
);
