/*
Crear el array de objetos "Pizzas". 
Debemos crear 6 objetos como mínimo.
Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 
Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 
Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 
*/


const pizzas = [
  {id: 0, name: "muzzarella", ingredientes: "muzarella, sal, tomate", precio: 420 },
  {id: 1, name: "pepperoni", ingredientes: "pepperoni, queso, tomate", precio: 650 },
  {id: 2, name: "fugazzeta", ingredientes: "cebolla, queso, tomate", precio: 390},
  {id: 3, name: "hawaiana", ingredientes: "piña, queso, tomate", precio: 620 },
  {id: 4, name: "mexicana", ingredientes: "carne, sal, queso", precio: 680 },
  {id: 5, name: "anchoa", ingredientes: "anchoas, muzzarella, tomate", precio: 500 }
];



// a) Las pizzas que tengan un id impar.
const idImpares = [];

function pizzasIdImpar() {
  for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].id % 2 !== 0) {
      idImpares.push(pizzas[i].name);
    }
  }
  console.log("Las pizzas de id impares son: " + idImpares.toString().replaceAll(",", ", "));

}

pizzasIdImpar()


// b) ¿Hay alguna pizza que valga menos de $600?
const pizzasBaratas = [];
function pizzasEconómicas() {
  for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].precio < 600) {
      pizzasBaratas.push(pizzas[i].name);
    }
  }
  console.log("Las pizzas baratas son: " + pizzasBaratas.toString().replaceAll(",", ", "));
}

pizzasEconómicas()

// c) Los nombres de todos las pizzas.
function nombreDeLasPizzas() {
  for(let i=0; i < pizzas.length; i++) {
    console.log("la pizza se llama: " + pizzas[i].nombre);
  };
};

nombreDeLasPizzas()

// d) Los precios de las pizzas.
function precioDeLasPizzas() {
  for(let i=0; i < pizzas.length; i++) {
    console.log("El precio de las pizzas son de: " + pizzas[i].precio);
  };
};

precioDeLasPizzas();

// e) El nombre de cada pizza con su respectivo precio.
function nombreYPrecio() {
  for(let i=0; i < pizzas.length; i++) {
    console.log("las pizza se llama: " + pizzas[i].nombre + " Y su precio es de: " + pizzas[i].precio);
  };
};

nombreYPrecio();