//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

console.log(carrito);
console.log(contenedorCarrito);
console.log(vaciarCarritoBtn);
console.log(listaCursos);

//para hacer la funcion tengo que tener un eventListener. 

cargarEventListeners
function cargarEventListeners(){
    //cuando agregas un curso cuando presionas agregar.
    listaCursos.addEventListener('click', agregarCurso)
}

//fucniones. 
//es bueno agrupar tus variables arriba y tus funciones abajo. 

function agregarCurso(){
    console.log()
}