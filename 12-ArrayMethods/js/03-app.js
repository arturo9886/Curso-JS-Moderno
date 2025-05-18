const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// tenemos este carrito de compras, como le podemos decir al cliente el total a pagar?

//ejemplo con un for each

let total = 0

carrito.forEach(producto => total+=producto.precio)

console.log(total)

// sin el arrow function ahora.

carrito.forEach(function(producto){
    total+=producto.precio
});

console.log(total);

// ahora con el reduce.
// el reduce no sigue el mismo patron quelos otros. 

let resultado = carrito.reduce((total,producto) => total + producto.precio );

console.log(total)

let resultado2 = carrito.reduce(function(total,producto){   
    return total=total+producto.precio;
},0)

console.log(resultado2)

//El 0 se coloca fuera de las llaves porque no es parte de la función. Es un parámetro del método reduce(), no del return.