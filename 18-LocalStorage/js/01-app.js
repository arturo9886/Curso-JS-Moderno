// agregar elemntos al local storage. 

localStorage.setItem("nombre","juan")

//FACTS local storage pertenece a la api de javascript.

// para encontrar los datos del loca storage nos vamos a inspeccionar y a application y en la seccion de storage esta local y session storage.
//la diferencia de session estorage y local es que session son los datos de la sesion perse  local es la data local del sitio. 

//Local storage e conforma de una llave y un valor.

localStorage.setItem("nombre","juan")
//                    llave    valor

/* local storage solamente puede almacenar strings, pero hay manera de poder almacenar arreglos y objetos*/

const producto = {
    nombre:"Monitor de 20`",
    precio:300
}

//para poder almacenar este objeto usamos JSON.Stringify.

const productoString = JSON.stringify(producto)

console.log(typeof productoString)

localStorage.setItem('producto',productoString)

// de la misma manera se puede hacer con los strings. 

const meses = ['enero','febrero','marzo'];

const mesesString = JSON.stringify(meses);

localStorage.setItem('meses',mesesString);

//Otra manera de hacerlo
localStorage.setItem('meses', JSON.stringify(meses));