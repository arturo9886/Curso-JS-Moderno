//Modificar Textos o Imagenes con JS


const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado)

// acceder al texto con el codigo de javascript. 

console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);

/*
La diferencia entre innner HTML y los otros dos , es que el innerHtml se lleva las etiquetas html en el texto. 

la differencia entre innerText y InnerHTML es que.

innerText se siente afectado a los estilos CSS. por ejemplo no lo encuentra co el visibility:Hidden.
textContent no es affectado por los estilos CSS.

Cuando se utilizan selectores se pueden usar also encadenamientos o chaining. 

por ejemplo

puiedes acceder a textcontent simplmente encadenando el queryselector con el metodo. 

*/

console.log('----------------------CON EL CHAINING-----------------------')

const encabezado2 = document.querySelector('header').textContent;

console.log(encabezado2);

console.log('----------------------Modificar los textos con los selectores----------------------')

const nuevoHeading = 'Nuevo Heading';

const encabezado3 = document.querySelector('.contenido-hero h1').textContent = nuevoHeading



// esta funcion acaba de cambiar el texto del texto del H!, tenemos que tener en cuenta que es gracias a que estamos llamando el contenido y poniendo
//que es igual al nuevo texto que tendremos. Tambien podemos intercambiarlo por variables y el texto a mostrar sera el del valor de la variable. 

const imagen = document.querySelector('.card img');

console.log(imagen);

imagen.src = 'img/hacer2.jpg'