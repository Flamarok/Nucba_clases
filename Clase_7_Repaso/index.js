// Objetos
const persona = [
    {id:0, name:"ariel", lastName:"Perez"},
    {id:1, name:"nico", lastName:"Suarez" },
    {id:2, name:"vale", lastName:"Ribaldo"}
];

// llamar a mostrar un elemento del objeto
console.log(persona[i].id + persona[i].name + persona[i].lastName);

// Recorrido de un objeto con for, muestra elemento por elemento.
for (let i=0; i < variable.length; i++) {
    console.log(variable[i]);
}

// Variable anonima
function x { return 2 * x};
// anonima a functio arrow
(x) => {2*x};

// EJEMPLO DE EJERCICIO CON RECORRIDO
var numbers = [1, 5, 10, 15];
let newDoubles = [];

for (let i=0; i< numbers.length; i++) {
    var doubles = numbers[i] * 2;
    newDoubles.push(doubles);
}

// Recorrido con .map
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(x => x * 2);
// o tambien
console.log(personas.map((p) =>{
     return `id: ${p.id} nombre: ${p.name}, apellido: ${p.lastName} `;) }) ; // o p.lastName


// FUNCTION ARROW VS FUNCTION COMÚN
const person = {
    nombre: 'nico',
    decirNombre: function () {
        console.log(this.nombre);
    },
};

const person2 = {
    nombre: 'nico',
    decirNombre: () => {
        console.log(this.nombre);
    },
};

// el arrow function hereda el this (contexto) por esto el ejercicio de persona2 da "undefined, porque toma el window"
// pero la normal crea su ambiente(this) entonces si va a mostrar el contexto y mostrará el nombre.

person.decirNombre();
person2.decirNombre();

