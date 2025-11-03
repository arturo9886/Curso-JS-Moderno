//Agregar elementos a LocalStorage.

//Agregar valor al localStorage
localStorage.setItem('nombre', 'juan');
/*                    llave     valor
/localStorage se conforma de una llave y un vaor como los objetos, */

/*
Existe local storage y sesion storage

en local storage, los datos se quedan mientras esten ahi escritos, idependientemente de lo que se haa a la pc, se cierre
reinicie etc...

en sessionStorage lo que pasa es que los datos se pueden borrar si la pagina se cierra
*/

/*
para poder agragar a session storage, se utiliza:
*/

sessionStorage.setItem('nombre','Arturito');

// si le ponemos nueros, los colocara como strings, no podemos guardar numeros ni objetos, solo strings. 

const producto = {
    nombre: 'Monitor de 24"',
    precio: '300'
};


const productoString = JSON.stringify(producto);

localStorage.setItem('producto', productoString);

/* lo que pasa aqui es que el objeto se transforma en un string usando JSON.stringify
   esto se puede hacer siempre y cuando un formato que no se acepte en loca storage
   se necesite insertar.  
*/

const meses = ['enero','febrero','marzo','abril'];

const mesesStrings = JSON.stringify(meses)

localStorage.setItem("meses", mesesStrings)