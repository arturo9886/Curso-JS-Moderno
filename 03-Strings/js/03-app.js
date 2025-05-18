//CONCATENAR STRINGS!

/*  
    En caso de querer concatenar distintos strings tenemos que usar el metodo .concat. 
    EJM
*/

const producto = ("televisor");
const precio = ("30 USD");

console.log (producto.concat(" ", precio));

/*  tambien podemos concatenar utilizando el simbolo de +,
    por ejemplo
*/

console.log(producto + " con un precio de " + precio);

/*
    en ecmascript 6 se implemento una manera mas facil de concatenar llamada
    TEMPLATE LITERALS. POR EJEMPLO.
*/

console.log (`El producto ${producto} tiene un precio de ${precio}`);

// esta es la manera mas recomendada para concatenar cuando tenemos una salida muy grande. TENGO QUE ACOSTUMBRARME A ESTA MANERA!

// tambien en vez de la suma se puede usar la coma, ejm...

console.log ("el producto", producto, "tiene un precio de ",precio);

// PRACTICA const prueba = prompt ("escribe la palabra que quieres contar");

//alert ("la palabra contiene " + prueba.length + " caracteres");