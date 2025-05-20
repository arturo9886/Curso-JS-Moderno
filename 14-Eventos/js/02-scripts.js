// Eventos con el mouse.

const nav = document.querySelector('.navegacion');

// Registrar un evento.

nav.addEventListener('click', ()=>{
    console.log('click en nav.')
})

//existe un evento llamado mouseEnter, esste se trata de cuando el mouse se coloca encima del elemento.

nav.addEventListener('mouseenter', ()=>{
    console.log('entrando a la navegacion.')
    nav.style.backgroundColor = "blue";
})

//Estamos registrando un evento, esperamos que suceda el evento y el codigo se ejecuta.

//Mouseout, este se ejecuta cuando el mouse sale del elemento, es decir cuado dejas de hacer un hover.

nav.addEventListener('mouseout',()=>{
    console.log('saliendo de la navegacion.')
    nav.style.backgroundColor = "";
})

//evento mousedown. este es con presionar, es similar a click. pero la diferencia es que el evento se ejecuta
//automaticamente lo presiones, no cuando lo presionas y lo sueltas. 

nav.addEventListener('mousedown', ()=>{
    console.log('mousedown.')
})

// esta mouseup, que es cuando das click y lo sueltas. 

//ahora hay eventos de doble click.

nav.addEventListener('dblclick', ()=>{
    console.log('dobleclick.')
})