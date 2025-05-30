//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito =[]; // creaemos un arreglo para ir agregando los elementos al carrito. se ira llenando.

console.log(carrito);
console.log(contenedorCarrito);
console.log(vaciarCarritoBtn);
console.log(listaCursos);

//para hacer la funcion tengo que tener un eventListener. 

cargarEventListeners();
function cargarEventListeners(){
    //cuando agregas un curso cuando presionas agregar.
    listaCursos.addEventListener('click', agregarCurso)

    //eliminar cursos del carrito.
    carrito.addEventListener('click',eliminarCurso )

    //vaciar el carrito

    vaciarCarritoBtn.addEventListener('click',()=>{
        articulosCarrito = [];
    })

    limpiarHTML(); // Eliminamos todo el HTML.

}

//Eliminar un curso del carrito. 

function eliminarCurso(e){
    console.log(e.target.classList)
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //eliminar del arreglo de articulosCarrito por el data id. 

        articulosCarrito = articulosCarrito.filter(curso => curso.id!==cursoId);
        console.log(articulosCarrito)
    }

    carritoHTML(); //iterar sobre el carrito. Mostrar su html.

}


//fucniones. 
//es bueno agrupar tus variables arriba y tus funciones abajo. 

function agregarCurso(e){ //le ponemos la e porque es un parametro de lo que se hara al interactuar con el objeto.
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

function leerDatosCurso(curso){ // curso dentro del parentecis es un parametro de lo que se hara al interactuar. 
    console.log(curso);

    //crear un objeto con el contenido del curso actial.

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector ('a').getAttribute('data-id'),  //Cada Curso tiene un id para acceder al id USAMOS LO 
        cantidad: 1,                                            // SIGUIENTE
    }

    
    //Lo que vamos a hacer ahora es hace que en case de agregar el mismo curso, simpelement se agregue una cantidad.

    //revisar si un elemento ya existe en el carrito. 
    //Utilizaremos el metodo .SUM, este nos permite iterar sobre un arreglo de objetos y confirmar si un 
    //elemento existe en el. 

    const existe = articulosCarrito.some( curso=> curso.id === infoCurso.id);
    console.log(existe);

   if(existe){
    //Actualizamos la cantidad
    const cursos = articulosCarrito.map(curso =>{
        if(curso.id===infoCurso.id){ // si el curso actual del carrito, es igual al curso que queremos agregar, la cantidad sube. 
            curso.cantidad ++;
            return curso; // retorna el objeto actualizado 
        }else{
            return curso;  // retorna los objetos que no estan duplicados. pero son iportates.
        }
    })

    /*con retornar el curso significa que iteraremos con el map, cuando encontremos el duplciado incrementaremos
    y lo que hacemos es incrementar el valor al uno y retornamos para que se le asigne ese valor actualizado
    al arreglo.

    cuando itinere sobre un curso que no esta duplicado simpelmente retornaremos el objeto no duplicado.
    */

    articulosCarrito = [...cursos]

   }else{
    //Agregamos el curso al carrito. 
    articulosCarrito = [...articulosCarrito, infoCurso]
   }
    // si tenemos dos elementos iguales, el codivo va a iterar y si uno es igual no dira que ya esta en el carrito. 
    //simplemente actualizaremos la cantidad. 


    //agregar elementos a la variable de carrito. osea el arreglo.
    console.log(articulosCarrito);

    carritoHTML();
}

//entonces como ya tenemos el array de los elementos del carrito
//ya va siendo hora de que el carrito se muestre en el HTML.

//Agregar carrito al HTML.

function carritoHTML(){

    //limpiar el HTML
    limpiarHTML();
    //recorre el carrito y agrega el HTML.


    articulosCarrito.forEach((curso)=>{
        //Una pequena mejora al codigo, destructuring:
        const {imagen,titulo,precio,cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}" width='100' >
        </td>
                <td>
            ${titulo}
        </td>
                <td>
            ${precio}
        </td>
                <td>
            ${cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        `;

        //como se veia, antes del destructuring. 

        //        <td>
        //     <img src="${.imagen}" width='100' >
        // </td>
        //         <td>
        //     ${curso.titulo}
        // </td>
        //         <td>
        //     ${curso.precio}
        // </td>
        //         <td>
        //     ${curso.cantidad}
        // </td>
        // <td>
        //     <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        // </td>

        //agregar el html del carrito en el tbody.

        contenedorCarrito.appendChild(row);
    })

/*
La funcion que tenemos arriba lo que hace es que esta copiando la lista y despues, agregando, 
entonces no se esta limpiando el html sino que simplmente se esta copiando mucho. 
*/
}


//ELIMINAR LOS CURSOS DEL TBODY

function limpiarHTML(){
    // esta es una forma lenta de hacerlo, con javascript hay que ser
    //optimo, while es una buena manera de poder hacer el codigo que limpie el HTML.
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }


}