/*
    Crear el array de objetos "Pizzas". 
    Debemos crear 6 objetos como mínimo.
    Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

    Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?




Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 
*/


const pizzas = [
  {id: 0, name: "muzzarella", ingredientes: "muzarella, sal, tomate", precio: 250 },
  {id: 1, name: "pepperoni", ingredientes: "pepperoni, queso, tomate", precio: 300 },
  {id: 2, name: "fugazzeta", ingredientes: "cebolla, queso, tomate", precio: 350},
  {id: 3, name: "hawaiana", ingredientes: "piña, queso, tomate", precio: 290 },
  {id: 4, name: "mexicana", ingredientes: "carne, sal, queso", precio: 390 },
  {id: 5, name: "anchoa", ingredientes: "anchoas, muzzarella, tomate", precio: 250 }
];


// a) Las pizzas que tengan un id impar.
function pizzasIdImpar() {
  const idImpares = pizzas.filter( pizzas => (pizzas.id % 2 != 0));
  console.log("Las pizzas con id impares son: " + idImpares);
};

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