import {resultado} from "./consultaAPI";

export function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}