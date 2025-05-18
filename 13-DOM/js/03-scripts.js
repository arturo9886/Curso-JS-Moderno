// como seleccionar elementos por id

// con los id se debe de utilizar el id con ese nobre una vez por documento.

// si quiero seleccionar el formulario se hace con.

const formulario = document.getElementById('formulario');
console.log(formulario);

// que pasa con algo que no existe.

const noexiste = document.getElementById('noexiste');
console.log(noexiste);

// la consola mostrara null si no existe.

//es buena practica utilizar un id con un nombre en especifico por documento, no tneer 2 documentos con el mismo nombre 
// porque lo que hara el metodo get element sera que buscara el primer id que encuentre con el nombre.

//get element by classes mostrara todos.