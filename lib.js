function cambiarMensaje(){

    var mensaje = document.getElementById("mensaje");

    if(mensaje.innerHTML == "¡Hola! Haz clic en el botón."){

        mensaje.innerHTML = "¡Gracias por hacer clic!";
        mensaje.className = "alert alert-success";

    }else{

        mensaje.innerHTML = "¡Hola! Haz clic en el botón.";
        mensaje.className = "alert alert-primary";

    }

}

function alternarModoOscuro(){

    var modoOscuroActivo = document.body.classList.toggle("modo-oscuro");
    var botonTema = document.getElementById("botonTema");
    var icono = botonTema.querySelector("i");
    var texto = botonTema.querySelector("span");

    botonTema.setAttribute("aria-pressed", modoOscuroActivo);

    if(modoOscuroActivo){
        icono.className = "bi bi-sun-fill";
        texto.textContent = "Modo claro";
        botonTema.setAttribute("aria-label", "Activar modo claro");
    }else{
        icono.className = "bi bi-moon-stars-fill";
        texto.textContent = "Modo oscuro";
        botonTema.setAttribute("aria-label", "Activar modo oscuro");
    }

}

