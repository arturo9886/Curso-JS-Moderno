//TRAVERSING THE DOM

//ES LA MANERA EN LA QUE NOS MOVEMOS POR EL DOCUMENTO O EL DOM.

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);

//Los enlaces que aparecen en el arreglo de objetos al llamar la consola se le conocen como los nodos.

//para acceder a ellos utilizamos lo siguientes.

console.log(navegacion.childNodes);// los espacios en blanco se consideran elementos, con los espacios en blancos nos referimos a los saltos de lineas. y se mostraran como text en la lista.

//Existe una alternativa que es children

console.log(navegacion.children[1]); // como nos muestra un html collection, es como un arreglo asi que podemos especificar posiciones.

console.log(navegacion.children[1].nodeName); // nos mostrara (A), que es el nombre de la etiqueta.

console.log(navegacion.children[1].nodeType); // nos mostrara que ees un nodo de tipo 1, es decir un nodo de elemento.

//los nodos de elemento son las etiquetas HTML.

//todo se encuentra de mejor manera en firefox developer edition. 

const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'nuevo heading desde traversing the dom.'

console.log(card.children[1].children[1].textContent); // estamos creando un selector y estamos navegando sobre todos los elementos, la posicion y children nos permite hacerlo. 

// podemos poner una posicion en children para poder seleccionar cual de los elementos hijos acceder.

//el proposito de esto es ir recorriendo e ir encontrando los diferentes elementos o nodos del HTML del sitio o aplicacion web.


//para cambiar la imagen

const imagen = document.querySelector('.card');
console.log(imagen.children[0]);

imagen.children[0].src = 'img/hacer2.jpg';

//se puede hacer un traverse inverso desde el hijo hasta el padre.

console.log(card.parentNode); //lois nodes toman en cuenta los espacios en blanco, lo mejor es usar Parent Element. ya que se expeesa en sintaxis HTML.

console.log(card.parentElement.parentElement); // podemos ponerles los parentElements suficientes hasta llegar hasta el main.

//tambien en javascript podemos seleccionar los helementos hermanos, es decir los elementos que esten bajo el mismo nivel del DOM dentro de la clase o ID padre

console.log(card);
console.log(card.nextElementSibling); // para esto lo que hacemos es que seleccionamos el siguiente elemento hermano. como el parent elemento, puedes stackearlos hasta el ultimo. 

//tambien hay uno par volver al previo.

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);//recorrera hacia atras hacia el elemento previo, se puede stackar porelementos hermanos haya.

//en caso de querer al primero o ultimo elemento utilizamos. 

console.log(navegacion.firstElementChild); //Para el primer elemento.

console.log(navegacion.lastElementChild); // para el ultimo elemento.