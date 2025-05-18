// ARROW FUNCTIONS EN ON FOR EACH Y UN MAP

const carrito =[

    {nombre: "monitor de 20'", precio:500},
    {nombre: "Television", precio:100},
    {nombre: "tablet", precio:200},
    {nombre: "Audifonos", precio:300},
    {nombre: "teclado", precio:400},
    {nombre: "celular", precio:700},
]

//forma normal

const nuevoarreglo = carrito.map(function(producto){
    return `${producto.nombre} - precio:${producto.precio}`;
})

//diferencias

const nuevoarreglo2 = carrito.map(producto => `${producto.nombre} - precio ${producto.precio}`)

console.log(nuevoarreglo2)

carrito.forEach(producto=>{console.log(`${producto.nombre} - precio: ${producto.precio}`);})

