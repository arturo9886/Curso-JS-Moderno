const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// confirmar si un valor existe en un arreglo, 

// comprobar si un valor existe en u arreglo. 

meses.forEach((mes) => {
    if (mes === 'Enero'){
        console.log('Enero existe')
    }
    else{
        console.log(mes)
    }
})


// metodo con un Array Method!

console.log('-----------------------------------Metodo con un array Method-------------------------------')

const resultado = meses.includes('Enero');
console.log(resultado)

// este codigo lo que hace es que devuelve un boleano true o false dependiendo de que el valor exista.

// en un areglo de objeto debes de usar .some

console.log ('-----------------------------------Prueba con un arreglode objetos y .some-------------------------------')

const existe = carrito.some( producto =>{
    return producto.nombre === 'Celular'
})

console.log(existe)


// en un arreglo tradicional.

const existe2 = meses.some(mes => mes ==='Febrero')
console.log(existe2)



