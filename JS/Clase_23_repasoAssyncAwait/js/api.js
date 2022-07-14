import * as UI from '*/interfaz'

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }
    /* consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        // Aca va el spinner
        UI.divResultado.textContent('Loading...');
         //MEtodo fetch
        fetch(url)
            .then(respuesta => respuesta.json()) // permite ver de manera mas clara la info
            .then(resultado => { // este resultado permite mostrar la info requerida
                // console.log(resultado); // muestra la info pedida 
                const {lyrics} = resultado // desestructurada un valor de la API
                if (lyrics) { //Mensaje de error si no encuentra. si encuentra lo muestra
                    UI.divResultado.textContent = lyrics
                    UI.headingResultado.textContent = `Cancion ${(this.cancion).toUpperCase()} de ${(this.artista).toUpperCase()} `
                } else {
                    UI.divMensajes.textContent = `Rellenar ambos campos`
                    UI.divMensajes.classList.add('error')
                    UI.divResultado.textContent = ''
                    setTimeout( () => { // se borra el mensaje de error
                        UI.divMensajes.textContent = ``
                        UI.divMensajes.classList.remove('error')
                    }, 3000);
                }
                
                
            }) */

         // Metodo Async Await
    async consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        
        try {
            const respuesta = await fetch(url);  // esperamos una respuesta, requerimos una promesa, si no existe o hay error o pasa algo. LA CONSULTA
            const resultado = await respuesta.json(); // traduce y permite leer mejor y acomodarlo como variable o para mostrar. LO INTERPRETA
            const { lyrics } = resultado // desestructurado un valor de la API

            if (lyrics) {
                UI.divResultado.textContent = lyrics
                UI.headingResultado.textContent = `Cancion ${this.cancion.toUpperCase()} de ${this.artista.toUpperCase()}`
            } else { // error en la busqueda o input
                throw new Error('No se encuentra la cancion')    
            }
        } catch (error) { // el catch es para los errores de servidor
            UI.divMensajes.textContent = error // mandará el mensaje de error indicado en el else, tambien se puede poner el texto comunmente
            UI.divMensajes.classList.add('error')
            UI.divResultado.textContent =' '
            setTimeout(() => {
                UI.divMensajes.textContent = ' '
                UI.divMensajes.classList.remove('error') 
            }, 3000);
            
        }
    }
}

export default API // decimos que es la export mas importante (ya que es lo unico dentro del archivo)

