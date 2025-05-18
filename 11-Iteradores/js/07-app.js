//For off, es similar ar for. 


const pendientes = [ 'tarea', 'comer', 'proyecto', 'estudiar javascript'];

const carrito =[

    {nombre: "monitor de 20'", precio:500},
    {nombre: "Television", precio:100},
    {nombre: "tablet", precio:200},
    {nombre: "Audifonos", precio:300},
    {nombre: "teclado", precio:400},
    {nombre: "celular", precio:700},
]

for(let pendiente of pendientes){
    console.log(pendiente);
}

// esto tambien puede recorrer un arreglo de objetos. 

console.log('--------------------------PUREBA CON los arrays objects-----------------------------')


for (let productos of carrito){
    console.log(`${productos.nombre} con el precio de: ${productos.precio}`)
}