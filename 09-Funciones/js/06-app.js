// parametros por default. 

function saludar (nombre, apellido){
    console.log(`hola${nombre}, ${apellido}`)
}

saludar ('juan', 'de la torre');

// algunas veces vamos a llamar las funciones y quizas no tengan los valores para que esa funcion realice el codigo.

/*Y algunas veces va a ser obligatorio.

Por ejemplo, si te toca trabajar en un sistema de banco bueno y alguien va a hacer una transferencia,

pues es obligatorio tener la cuenta a la que se van a mandar.

Se va a mandar el dinero y también la cantidad./
*/

// si no sepresentan datos podemos poner valores por default.

// lo que podemos ahcer esponer un simbolo de (=) a la variable para que este tenga un parmetro por default, en caso de que tenga un valor, pues este tomara el valor puesto. 

// EJM.

function saludarr (nombre = "desconocido", apellido = ""){
    
   let respuesta = alert(`hola ${nombre}, ${apellido}`)
}

let nombreUsuario = prompt('digite su nombre');
let apellidoUsuario = prompt ('digite su apellido');

if (nombreUsuario === "" && apellidoUsuario==="") {
    alert (`no tiene nombre`);
} else{

        saludarr (nombreUsuario, apellidoUsuario);

    }

