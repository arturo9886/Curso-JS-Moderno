// EL && hace que se cumplan dos condiciones dentro del primer if.

const usuario = false;
const puedePagar = false;

// if(usuario){
//     console.log('si eres usuario')
// }
// else if(puedePagar){
//     console.log('puedes pagar');
// }

//MANERA CON EL &&

if (usuario && puedePagar){
    console.log('si puedes coprar y pagar...')
}
else if(!usuario && !puedePagar){
    console.log('no puedes comprar')
}
else if(!usuario){
    console.log('inicia sesion, crea una cuenta...');
}
else if(!puedePagar){
    console.log('fondos insuficientes.')
}
else{
    console.log('no no puedes comprar o pagar. ')
}

// si cualquiera de las dos es false, caera directamente al else, porque lo que hace el && es que se cumplan las dos funciones, en caso de querer poner mas 
// info especifica ponemos else if para mas condicionales. 

// hayq ue tener en cuenta que al ponerle el ! a la variable ene l if, estamos verificando si es falsa. 