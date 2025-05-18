//Filter.

//Filter vaa crearte un nuevo arreglo basado en el parametro que es evaluado. 

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con find index hay que recordar que este metodo solo encuentra el primer valor y ya.

// Filter te permite hacer muchas operaciones en tu arreglo.

let resultado 

resultado = carrito.filter(function(producto){
    return producto.precio > 400;
});

resultado = carrito.filter(producto => producto.precio<600);

console.log(resultado);

resultado = carrito.filter(function(producto){
    return producto.nombre!=='Audifonos';
})

console.log (resultado);