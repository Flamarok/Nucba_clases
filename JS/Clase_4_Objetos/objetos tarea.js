/*
 
-Crear, como mínimo, 5 objetos con esta clase. 
-Crear una función que acepte como parámetro un objeto. Esa función debe imprimir en consola la marca, el color y el talle del objeto que le pasamos. 
-La impresión en consola debe ser friendly para el usuario, no solo los datos sueltos.
*/

// -Crear la clase constructora "Zapatillas". Debe aceptar como parámetros Marca, color y talle.

class zapatillas {
    constructor(marca, color, talle) {
        this.marca = marca ;
        this.color = color ;
        this.talle = talle ;
    };
    indicarCaracteristicas = function() {
        console.log("La Marca de la zapatilla es: " + this.marca + " Es de color: " + this.color + " Y el talle es: " + this.talle);    
    };
};


var zapatilla1 = new zapatillas("Nike", "Rojo", 37);
var zapatilla2 = new zapatillas("Adidas", "Naranja", 41);
var zapatilla3 = new zapatillas("Rebook", "Azul", 31);
var zapatilla4 = new zapatillas("Topper", "Verde", 27);
var zapatilla5 = new zapatillas("Puma", "Violeta", 35);

