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

cargarEventListeners();
function cargarEventListeners(){
    //cuando agregas un curso cuando presionas agregar.
    listaCursos.addEventListener('click', agregarCurso)
}

//fucniones. 
//es bueno agrupar tus variables arriba y tus funciones abajo. 

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    else{
        console.log('boton incorrecto...');
    }
};

// no es bueno crear funciones muy largas, lo mejor es dividir el problemas en distintas funciones. 

//lee el contenido del HTML que le dimos click y extrae la informacion del curso. 

function leerDatosCurso(curso){
    console.log(curso);

    //crear un objeto con el contenido del curso actial.

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector ('a').getAttribute('data-id'),  //Cada Curso tiene un id para acceder al id USAMOS LO 
        cantidad: 1,                                            // SIGUIENTE
    }
    console.log(infoCurso)
}