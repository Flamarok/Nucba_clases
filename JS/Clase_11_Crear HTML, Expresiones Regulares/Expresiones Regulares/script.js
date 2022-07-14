const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input"); // hace referencia a todos inputs, en fin y al cabo el formulario. un arreglo de inputs

const expresiones = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // .+ es una concatenacion y necesitas poner "\." sino no toma el punto para el dominio
  };


const validarFormulario = (e) => {
    /* console.log(e.target.name); */ // * soltado la tecla muestra el nombre del input.
    switch (e.target.name) {  // usamos el nombre del imput que hicimos click
        case "usuario":
            if (expresiones.usuario.test(e.target.value)) {  // funcion dada por js para testear las exp reg creadas.
                /* console.log('Correcto'); */
                document.getElementById('grupo_usuario').classList.add('formulario_incorrecto'); // saca la clase anterior para permitir la entrada de la otra clase y no haber dos clases encimadas.
                document.getElementById('grupo_usuario').classList.add('formulario_correcto'); // le agrega al elemento con esa id una class de css.
                document.querySelector('#grupo_usuario > p').classList.remove("mostrar_mensaje_error"); // remueve la calse con el mensaje de error cuando este es agregado en caso de error.
            } else {
                /* console.log('Incorrecto'); */
                document.getElementById('grupo_usuario').classList.remove('formulario_correcto');
                document.getElementById('grupo_usuario').classList.add('formulario_incorrecto');    
                document.querySelector('#grupo_usuario > p').classList.add("mostrar_mensaje_error"); //agrega la clase con el mensaje en caso de error.
            }
            break;

        case "nombre":
            if (expresiones.nombre.test(e.target.value) ) { 
                document.getElementById('nombre_usuario').classList.add('formulario_incorrecto');
                document.getElementById('nombre_usuario').classList.add('formulario_correcto');
                document.querySelector('#nombre_usuario > p').classList.remove("mostrar_mensaje_error");
            } else {
                document.getElementById('nombre_usuario').classList.remove('formulario_correcto');
                document.getElementById('nombre_usuario').classList.add('formulario_incorrecto');    
                document.querySelector('#nombre_usuario > p').classList.add("mostrar_mensaje_error");
            }
            break;
        default: 
            break;
    } //se puede hacer tambien con un for con ifs
}; // Arrow function   

/*


                                    HACER FUNCION PARA RESUMIR LAS FUNCIONES DE ARRIBA EN UNA FUNCION PARAMETRISADA.
function formulariosCorrectEIncorrect(ids) {
    document.getElementById('ids').classList.add('formulario_incorrecto');
    document.getElementById('ids').classList.add('formulario_correcto');
    document.querySelector('#ids > p').classList.remove("mostrar_mensaje_error")
}


*/



inputs.forEach((inputs)=>{ // recorre cada uno de los imputs y genera un listener de cada uno de ellos, como parametro pasa el dato del imput, usuario contra, etc
    inputs.addEventListener("blur", validarFormulario => { // haces click en el imput y al hacer en otro lado salta el evento informando
        /* console.log("Funcionando Blur") */
    });;
    inputs.addEventListener('keyup', validarFormulario => {  // cuando suelto la tecla del teclado salta el evento y al estar linkeado con validarFormulario *
        /* console.log("Soltando La letra"); */
    }); 
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Formulario Enviado");
});  

