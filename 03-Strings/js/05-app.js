// USAR METODOS REPLACE SLICE AND SUBSTRING

const producto = "monitor de 20 pulgadas";

console.log(producto);

// con el metodo replace lo que hacemos es que remplazamos cualquier parte del texto que queramos con lo que le pongamos, EJM. 
//.replace PARA REEMPLAZAR
console.log(producto.replace("pulgadas",'"'));
console.log(producto.replace("monitor","monitor curvo"));

// el metodo slice lo que nos permite hacer es cortar partes de una cadena de texto EJM.
//.slice PARA EMPLAZAR

//LO QUE HACE ES QUE SE DEFINE LA POSICION DEL CARACTER QUE QUEREMOS ELMINAR HASTA LA POCISION FINAL, LA POSICION INICIAL NO PUEDE SER MAYOR QUE LA FINAL.
//console.log(producto.slice(8));

//substring LA DIFERENCIA DE FUNDAMENTAL DE SLICE Y SUBSTRING ES QUE SI PONEMOS UN NUMERO INICIAL MAYOR Y EL FINAL MENOS, LO QUE HARA QUE LOS INTERCAMBIA.

// La manera que USA GOOGLE para poner el usuario con solo la letra.

const usuario = ("arturo");
console.log(usuario.substring(0,1));

// hay una manera mas facil de haverlo que es usando chartat.

console.log(usuario.charAt(0));