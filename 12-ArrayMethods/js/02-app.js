// find indez.

//este metodo nos permite saber el indice o lugar del elemento de un array.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, i) => {

    if (mes==='Abril'){
    console.log(`este es el mes que buscaba: ${mes}`)
}else{
    console.log(mes)
}

})


// manera manual para saber en que valor se encuentra un elemento del array.,

//encontrar un mes del array con find insex

const indice = meses.findIndex (mes => mes==='Abril');

console.log(indice)

const indice2 = meses.findIndex (function (mes) {
    return mes==='Julio';
})

console.log(indice2)

const indice5 = meses.findIndex(function(mes){
    return mes==='Mayo'
})


// find index con el arreglo de obajetos. 

const indice3 = carrito.findIndex (objeto => objeto.nombre==='Celular');

console.log(indice3)

const indice4 = carrito.findIndex (function(objeto){
    return objeto.nombre==='Audifonos';
});

console.log(indice4)

// que pasa si hay dos elementos que temgan el mismo valor, 
// el find index va a buscar el primero y lo retornada. 