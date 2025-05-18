"use strict";

const producto = {
    nombre: "monitor de 20'",
    precio: 300,
    disponible: true,
}

Object.seal(producto);

// lo que se puede ahcer son seal es que no se puden ni agregar
// ni eliminar propiedades del objeto, pero si se pueden modificar.

//EJM.

producto.disponible= false;

console.log (producto);

// asi que la diferencia es que puedes modificar las propiedades pero no agregar ni eliminar.

console.log(Object.isSealed(producto));

// aqui comprobamos si el objeto esta sellado. 

