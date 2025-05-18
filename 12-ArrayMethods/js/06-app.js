// EVERY
//every hace que todos los elementos de un arreglo, tienen que cumplir la condicion para que nos devuelva true. 


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado = carrito.every(function(producto){
    return producto.precio<500;
})

console.log(resultado);

// en un .Every todos los objetos tienen que cumplir la condicion.

//every no es igual a some ya que some simplemente buscara que se gumpla almenos una. 