// Crear un nuevo arreglo con el spread operator.

//en las nuevas versiones de javascript hay funciones que hacen los mismos, 

// se denominan como formas imperativas y formas descriptivas.

// las que hemos estado usando son la imperactivas.

// la forma imperactiva modifica la variable original, sobre ella misma la sobreescribe y trabaja y modifica los datos. 

// en la forma declarativa, no modifica la variable, sino que crea una nueva. En su sintaxis no es tan claro lo que hace

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

carrito.unshift(producto3);

console.table(carrito);

let resultado

resultado = [...carrito, producto]

// esta es una forma imperativa.

// para agregar otro carrito utilizamos, 

resultado = [...carrito, producto2];

// de esta manera el producto 3 ira primero, el resultado de como se vera el arreglo al final depende del orden de como lo ponemos. 

resultado = [...producto3, carrito];