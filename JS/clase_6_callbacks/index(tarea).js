//Crear una función que acepte como parámetro 2 números y retorne el resultado de la multiplicación de dichos números. 

function multiplica(numeroUno, numeroDos) {
    let resultado = numeroUno * numeroDos;
    return "El resultado es " + resultado
}

//Crear una función que acepte 3 parámetros. Los primeros dos, tienen que ser números, el tercero, la función creada anteriormente. Esta nueva función, debe retornar (también) el resultado de la multiplicación.

function calcular(numeroUno, numeroDos, operacion) {
    let resultado = operacion(numeroUno, numeroDos);
    return resultado;
}
