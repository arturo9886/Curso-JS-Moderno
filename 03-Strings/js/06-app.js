// CON EL METODO .repeat vamos a poder repetir una cadena de texto...

const producto = "monitor de 20 pulgadas";

const texto = "en promocion ".repeat(2);

console.log(texto);
console.log(`${producto} ${texto} !!!` )

// lo que estamos haciendo es que cocatenar los distintos strings junto con el que esta siendo utilizado por el metodo repeat.

//el metodo repeat no toma en cuenta los decimales, lo que sinifica que los decimales que pongamos, simplementolso va a redondear hacia atras. 

//----------------------------------------------------------------------------------------------------------------------------------------------------

//SPLIT este metodo nos permitira pord er dividir un string. EJM.

const actividad = "estoy aprendiendo JavaScript moderno."

console.log(actividad.split(" "))

// lo que hace este metodo es que divide los distintos strings a partir del caracter de nuestra conveniencia, es decir que podemos hacer una lista con esto. EJM:

const hobbies = ("jugar, comer, dormir, cagar, aprender a programar");

console.log(hobbies.split(","));