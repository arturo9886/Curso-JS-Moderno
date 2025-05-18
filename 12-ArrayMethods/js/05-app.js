//FIND

//El metodo find the crea un nuevo arreglo basado en la condicion que estas realizando. 

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//FORMA CON UN FOR EACH

console.log('---------------------------------------------Con un for each--------------------------------------------------')

let resultado = null;

carrito.forEach(function(producto){
    if(producto.nombre==='Tablet'){
        resultado=producto;
    }
});

console.log(resultado)

const resultado2 = carrito.find(producto => producto.nombre==='Tablet')
console.log(resultado2)

// muy importante es que .find va a buscar el primer elemento que encuentre.