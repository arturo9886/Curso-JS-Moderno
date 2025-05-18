const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//revisar si 2 numero son iguales

console.log(numero1 == numero3);

// aqui dice falso

console.log(numero1==numero2);

//aqui podemos ver que la consola dira que es true. ya que lo que hace es que simplemente compara el valor independientemente de ser string o numero.

//comparador estricto.

console.log (numero1 === numero2);

// con el comparador estricto tambien se toma en cuenta el tipo de dato, que si al ser diferentes tipos de datos, no son iguales aunque tengan el mismo valor. 

/*ahora, algo para asegurarnos de que sean iguales los numeros al hacer la comparacion estricta, 
es convertir el string a un numero. EJM. Esto se usa en caso de que nuestra base de dano no nos 
retorne un numero sino un string. */

console.log(numero1=== parseInt(numero2));

//ejemplo de hacer un login UTILIZANDO NO ES IGUAL

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);

//comparando diferencia de los numeros ya sea string o numero.

console.log(numero1 != numero2);

// de la misma manera que el comparador que vimos aqui, este es un comparado de diferencia que no compara los tipos de datos,
// AHORA USAREMOS EL COMPARADOR ESTRICTO.

console.log (numero1 !== numero2);

// Del mismo caso en caso de que comparemos diferencias y nos da un valor en string, podemos igualmente transformarlo en number.

console.log(numero1 !== parseInt(numero2));
