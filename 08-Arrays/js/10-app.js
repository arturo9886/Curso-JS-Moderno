// usar un metodo en los arreglos que es .map

const carrito =[

    {nombre: "monitor de 20'", precio:500},
    {nombre: "Television", precio:100},
    {nombre: "tablet", precio:200},
    {nombre: "Audifonos", precio:300},
    {nombre: "teclado", precio:400},
    {nombre: "celular", precio:700},
]

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
})

carrito.map(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
})

//normalmente son lo mismo pero hay una diferencia diferente.

// el punto map crea un nuevo arreglo y el for each no, 
// no podemos crear u nuevo arreglo con el for each, porque lo que hace es que itinera.
//el .map crea un nuevo arreglo itinerado.