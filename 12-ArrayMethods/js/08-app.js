// Formas de usar Spread Operator.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Agregar elementos al final.

//SPREAD OPERATOR CON ARREGLOS.


const meses2 = [...meses, 'agosto']

console.log(meses2)

// Esta manera no modifica el arreglo original, nnormalmente asi se basa la programacion funcional.

// es importante tratar de no modificar los datos orginiales.




// no es bueno simepre usar el .push ya que modifica el arreglo original. 

//SPREAD OPERATOR CON objetos.
const producto = {producto:'disco duro', precio:300}

const carrito2 = [...carrito, producto];

console.log(carrito2);

//no se le pueden poner los 3 puntos al segundo, tiene que dejarse vacio. 