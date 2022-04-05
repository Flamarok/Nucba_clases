class  Robot {
    constructor(color, posicionX, posicionY) {
        this.color = color ;
        this.posicionX = posicionX ;
        this.posicionY = posicionY ;
    };
    desplazar = function(X, Y) {
        this.posicionX = X ;
        this.posicionY = Y;
    };
    posicion = function() {
        console.log("Robot " + this.color + " en X: " + this.posicionX + " Y: ", this.posicionY);
    };
}



var robot1 = new Robot("verde", 10, 10);
var robot2 = new Robot("narnaja", 5, 5);
var robot3 = new Robot("celeste", 0, 0);

robot1.posicion();
robot2.desplazar(50, 50);
robot2.posicion();


// 2 Ej: (Sin metodo)
/*

class Chocolate {
    constructor(tipo, marca);
        this.tipo = tipo;
        this.marca = marca;
};

var chocolate1 = new Chocolate("Blanco", "Milka");

*/

// 3er Ej:
/*
// anio para evitar la eñe en codigo.
class Auto {
    constructor(marca, modelo, anioActual, anioAntiguedad);{
        this.marca = marca;
        this.modelo = modelo;
        this.anioActual = anioActual;
        this.anioAntiguedad = anioAntiguedad;
    };
    arrancar = function() {
        return 'El auto arrancó';
    };
    getMarca = function() {
        return this.marca;
    };
    getAnio = function() {
        retunr this.anio;
    };
    calcularAntiguedad = function() {
        let antiguedad = this.anioActual - this.anioAntiguedad;
        return "La antiguedad del auto es " + antiguedad;
        // otra manera(sacando la variable)= return "La antiguedad del auto es " + (this.anioActual - this.anioAntiguedad);
    }
    
}


var miAuto = new Auto('Fiat', "Idea", 2022, 2015);  // anios preferentemente en numero por caso de operacion matematica.
*/