"use strict";

// es uso estricto se asegura de que no cometamos malas practicas y que el codigo siga las reglas debidas para compilarse.

const producto = {
    nombre:'Monitor de 20"',
    precio:300,
    disponible: true,
}


producto.disponible = false;
producto.imagen="imagen.jpg"

console.log(producto);

// como prevenir que un objeto sea modificado.

Object.freeze(producto );

//producto.disponible = false;

console.log(producto);

//para comprobar si un objeto esta congelado utilizamos este metodo.

console.log(Object.isFrozen(producto));

// este metodo no sirve si tiene por encima algun cambio de los atributos del objeto, ya que nos indicara primero que hay un error y no nos dejara pues continuar.