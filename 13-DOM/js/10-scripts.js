//GENERAR HTML CON JAVASCRIPT

 const enlace = document.createElement('A') //podemos crear cualquier etiqueta  HTML del body con esto. EN ESTE CASO ES UN ENLACE

 //PARA AGREGAR TEXTO AL ENLACE
enlace.textContent = 'Nuevo Enlace';

//ANADIENDO HREF

enlace.href = '/Nuevo Enlace';

enlace.target = '_blank';

//agregar una clase.

enlace.classList.add ('UnaClase');

enlace.onclick = mifuncion;

console.log(enlace);

//mostrar el elemento y tenemos que decidir donde mostrarlo. 

//seleccionamos la navegacion.

const navegacion = document.querySelector('.navegacion')

// navegacion.appendChild(enlace); // con append child podemos agregar nuestro elemento a donde queramos ya  la posicion que deseemos.

navegacion.insertBefore(enlace, navegacion.children[0]); // con el insert before ponemos el elemento en la posicion que queramos. 

// hay que tener en cuenta que se escribe el metodo insertBefore y entre parentesis ponemos el elemento que queremos agregar y despues llamamos la posocion desde el padre. 

// mientras no se agrege el elemento podemos ponerle diferentes atributos. 

//todo lo que creamos en el html lo podemos construir con create element. 

function mifuncion () {
    alert(`diste click mmg`)
}

// CREAR UN CART DE FORMA DINAMICA


// Esto va a ser muy similar a lo que harías.

// Por ejemplo, una vez que utilices Snappy o utilices una base de datos, vas a consumir, digamos,

// esos datos de algún lugar y los vas a mostrar en el HTML.

// Eso es lo que hacen librerías como como react, como Vue JS, librerías o frameworks Angular, etcétera.

const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto');

console.log(parrafo1);

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo');

console.log(parrafo2);


const parrafo3 = document.createElement('p');
parrafo3.textContent = '800 por persona'
parrafo3.classList.add('precio');

//CREAR UN DIFV CON LA CLASE DE INFO

const info = document.createElement('div');

info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen.

const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'// para buscar el source de la imagen es esta. 
imagen.alt = 'texto alternativo' // le podemos poner un texto alternativo con .alt

//CREAR EL CARD

const card = document.createElement('div');
card.classList.add('card');

card.appendChild(imagen);

//ASSIGNAR INFO

card.appendChild(info);

console.log(card); 

//INSERTAR EN EL HTML

const contenedor = document.querySelector('.hacer .contenedor-cards');

console.log(contenedor.children);

contenedor.insertBefore(card, contenedor.children[0]);