/* Crear con Javascript un código para que se pueda mostrar en el DOM la info que devuelve la promesa */

const aplicarDescuento = new Promise((resolve, reject) => {
    const dto = false; // como si fuera consulta a API
    if (dto) {
      resolve("Descuento Aplicado"); // dará este resultado ya que la constante es true
    } else {
      reject("Descuento NO aplicado");
    }
  });
  // esto no solo es sobre la base de dato, si el usuario ingresa un cupo y no cumple con la condicion del cupon y su uso por parte del usuario.
  
  const parrafo = document.querySelector("#descuentoMensaje");
  
  aplicarDescuento
    .then((res) => {
      const mensajeDeDescuento = document.createElement("p");
      mensajeDeDescuento.textContent = res;
      parrafo.appendChild(mensajeDeDescuento);
    })
    .catch((error) => {
      const mensajeDeDescuento = document.createElement("p");
      mensajeDeDescuento.textContent = error;
      parrafo.appendChild(mensajeDeDescuento);
    });
  
  

  /* //tambien
  
  aplicarDescuento
    .then((res) => {
      mostrarHTML(res)
    })
    .catch((error) => {
      mostrarHTML(error)
    });
  
    function mostrarHTML(texto) {
      const mensajeDeDescuento = document.createElement("p");
      mensajeDeDescuento.textContent = texto;
      parrafo.appendChild(mensajeDeDescuento);
    }
  
  */