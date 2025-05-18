const carrito = [];

// definir un producto 

const producto = {
    nombre: "televisor de 20'",
    precio: 400,
}

const producto2 = {
    nombre: "celular",
    precio: 5000,
}

//.push para agregar al final de un arreglo

carrito.push(producto);
carrito.push(producto2);

const producto3 ={
    nombre: "teclado",
    precio: 30.
}

const producto4 ={
    nombre: "teclado2",
    precio: 309.
}


carrito.unshift(producto3);

carrito.unshift(producto4)
console.table(carrito);

// // para eliminar el ultimo elemento de un carrito utilizamos el metodo.pop

// carrito.pop()
// console.table(carrito);

// // para elminiar el primer elemento de un carrito sera el metodo.shift

// carrito.shift()
// console.table(carrito)

// para eliminar un objeto en especifico, de donde iniciar a cortar.
// para esto utilizamos el metodo splice.

carrito.splice(1,1);

console.table(carrito);

//.splice toma dos parametros, la posicon en la cual empezada a eliminar, y el segundo es cuantos elementos eliminara desde esa posicion. 