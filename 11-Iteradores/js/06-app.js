// for each!
// el for each es ideal para recorrer arreglos, va a ejecutarse almenos una vez, por la cantidad de elementos que hay en el arreglo. 

const pendientes = [ 'tarea', 'comer', 'proyecto', 'estudiar javascript'];

pendientes.forEach ( (pendiente) =>console.log(pendiente))

console.log('--------------------------PUREBA CON MAP-----------------------------')

pendientes.map ( (pendiente) =>console.log(pendiente))

console.log('--------------------------PUREBA CON los arrays objects-----------------------------')

const carrito =[

    {nombre: "monitor de 20'", precio:500},
    {nombre: "Television", precio:100},
    {nombre: "tablet", precio:200},
    {nombre: "Audifonos", precio:300},
    {nombre: "teclado", precio:400},
    {nombre: "celular", precio:700},
]

carrito.forEach((producto,index,) => console.log(`${index} : ${producto.nombre}`))
console.log('--------------------------PUREBA CON MAP-----------------------------')

carrito.map(producto =>console.log(producto.nombre))

// la diferencia es que map te crea un arreglo nuevo.

console.log('--------------------------PUREBA CON variables-----------------------------')


const NuevoArreglo1 = carrito.forEach(producto =>producto.nombre)

const NuevoArreglo2 = carrito.map((producto, index) =>producto.nombre)


console.log(NuevoArreglo2)


