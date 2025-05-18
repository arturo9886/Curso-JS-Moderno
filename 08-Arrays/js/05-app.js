// agregar nuevos elementos al fin o inicio de un array

const meses = ['enero', 'febrero', 'marzo'];

meses [3] = 'abril';

console.table (meses);

// lo malo de esto es que se sobreescribe y quita el valor de esa posicion.

// metodos del arreglo. 

meses.push('abril');

// con este metodo se agregara al final siempre de manera dinamica un elemento al arreglo. 
// asi funcionan los carritos de compras. 

// en este ejemplo pondremos un carrito de compras. //////////////////////////////////////////////

const carrito = [];

// definir un producto. 

const producto = {
    nombre: "monitor de 20'",
    precio: 400
}

carrito.push(producto);

console.table(carrito);

const producto2 = {
    nombre: "celular",
    precio: 5000
}

carrito.push(producto2)

console.table (carrito);

// para poder agregar un nuevo elemento al array al inicio utilizamos el metodo (unshift). 

const producto3 = {
    nombre: 'teclado',
    precio: 30,
}

carrito.unshift(producto3);

console.table(carrito);

//PRUEBA
