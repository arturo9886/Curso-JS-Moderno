//la navegacion de imagenes esta llena de eventos. 
// tofa accion que hacemos es un evento

/*
addEventListener es uno de esos eventos. 
*/

console.log(1)


      //en el parentesis va el evento que queremos escuchar.
document.addEventListener("DOMContentLoaded", () => {
    console.log(2);
})

console.log(3)

// la razon por la que el 2 es de ultimo es porque el add event lsitener que tenemos
// Estperara que el documento entero este listo y cuanod este este listo, 
// Se ejecutara ya que el comprobar que todo este listo es su trigger.

// de eso se tratan los eventos, de que por cada accion se ejecute un codigo, los 
// events son codigos que se triggerean con interacciones con la pagina. 