const img3 = document.querySelector(
  "body > main > section:nth-child(1) > div > div:nth-child(3) > img"
);

img3.src = "(nuevo link de img).jpg"; // se lo puede modificar ya que era el unico atributo que tenia el selector
img3.alt = "No disponible"; // se lo puede agregar como es este caso

// Esta info puede sumarse utilizando un addEventListener, ya sea con click o scroll. Ej:
/* img3.addEventListener("click", () => {
    img3.src = "(nuevo link de img).jpg";
    img3.alt = "No disponible";
}); 
 */

// Entrar a selector hijo(que no tienen ni clase o id) y en este caso lo elimina.
const enlace = document.querySelector(".navegacion"); // clase navegacion
console.log(enlace.children);
enlace.children[3].style = "display:none";

// Modificacion de textos

var categoria = document.querySelector("ubicacion del elemento");

var titulo = document.querySelector("ubicacion del elemento");

var precio = document.querySelector("ubicacion del elemento, ya sea con su clase o click derecho copy selector");

categoria.textContent = "Deportes";
titulo.textContent = "Futbol de primera";
precio.textContent = " 2500 mensuales";
