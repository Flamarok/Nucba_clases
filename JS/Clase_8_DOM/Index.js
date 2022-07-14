var titulo = document.getElementById("titulo_mundo_primero"); // anexado a un html.

console.log(titulo); 


/*
<div class="error"></div>
        <script>
            let target = document.querySelector('.error');

            // target.innerHTML = 'input';

            // target.textContent =
            //     ' <img src=x onerror="alert(\'XSS Attack\')" img>'; // muestra el script tal cual esta

            /* target.innerHTML = ' <img src=x onerror="alert(\'XSS Attack\')" >'; // lo ejecuta, lo cual es peligroso.
        </script>
*/

// getElementsById

// getElementsByClassName()

// getElementsByTagName

var titulos = document.getElementsByTagName("h1");

titulos //Muestra todos los tags h1.

titulos[0]; // muestra el h1 señalado en el subindice.

