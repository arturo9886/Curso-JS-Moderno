function sumar (a,b) { // a y b son parametros, estos no son constantes, pueden cambiar
    console.log(a + b); // cuerpo de la funcion.
}

sumar(2,3); // (2,3) argumento de la funcion, ponemos valores reales para reemplazar los de los parametros.

// eso significa que podemos llamar la funcion  multiples veces para calcular diversos valores simplemente cambiando los nombres del argumento. 

// cunado entras a twitter o facebook, ellos muestran tu nombre o fotografia, 

// un ejemplo sencillo vamos a decir para saludar creamos esta funcion. 

// function saludar (nombre, apellido) {
//     console.log(`hola ${nombre}, ${apellido}`);
// }

// saludar ("juan","perez");

function saludarr(nombre, apellido){

    alert (`hola ${nombre}, ${apellido}`)
}

let nombreUsusario = prompt('escribe un nombre');
let apellidoUsuario = prompt ('escribe un apellido');


saludarr(nombreUsusario,apellidoUsuario);

//pruebita.

// si al llamar la funcion no ponemos nada, es decir si no tienen ningun valor, nos dara undefined. 
