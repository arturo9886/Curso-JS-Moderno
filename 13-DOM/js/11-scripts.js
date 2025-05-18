const btnFlotante = document.querySelector('.btn-flotante');

const footer = document.querySelector('.footer');

// Al hacer click a algo y que esto reaccione es un evento

/* La forma en la que le dices a un boton que espere para hacer un evento es con el metodo (addEventListener).
*/
//                            Evento   reaccion u accion al evento.
btnFlotante.addEventListener('click',mostraruocultarfooter)

//lo que hace event listener es esperar por un evento y una vez sucede ejecuta el codigo. 

// tambien se puede crear una function. 

//MOSTRAR Y OCULTAR FOOTER.

function mostraruocultarfooter (){
    if(footer.classList.contains('activo') ){
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent='Idioma y Moneda';

    }
    else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent='X Cerrar';
    }
}

// puede tener la misma funcionalidad al poner this en vez de la variable btn. 