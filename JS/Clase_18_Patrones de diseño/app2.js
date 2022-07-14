// PATRON FACTORY

class InputHTML {
    constructor(type, name) {
    this.type = type,
    this.name = name
    }
    crearInput() {
        return `<input type="${this.type}" name="${this.name}"> ` // genera una "fabrica" de etiquetas input en este caso
    }
}


class HTMLFactory {
    crearElemento(tipo, nombre) {
        switch (tipo) { // pueden ser for o ifs o for+ifs o swtich, tipo es el buscador interno
            case "text":
                return new InputHTML('text', nombre);
                break;
            case "tel":
                return new InputHTML('tel', nombre);
                break;
            case "email":
                return new InputHTML('email', nombre);
                break;
        
            default:
                break;
            }    
    }
}

const elemento1 = new HTMLFactory() // instancia
const inputtext = elemento1.crearElemento("text", "-nombre-cliente")
console.log(inputtext);
console.log(inputtext.crearInput())

const elemento2 = new HTMLFactory() // instancia
const inputemail = elemento2.crearElemento("email", "@hotmail.com")
console.log(inputemail)
console.log(inputemail.crearInput())

// Tarea mostrar el input en el DOM