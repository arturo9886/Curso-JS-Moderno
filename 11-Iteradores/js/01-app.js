// for loop!

// for loop es la manera de que se ejecute codigo hasa que se cumpla la condicion, el codigo se ejecutara en bucle. 

// for(let i = 0; i<10 ; i++){
//     console.log(i)
    
// }

// para cmabiar el incremento es importante poner el simbolo y el = con el numero a utilizar como base e incrmento.

// pregunta para junior, identificar pares e impares. 

// const cantidadAmostrar = parseInt(prompt(`elige la cantidad a mostrar`))

// for (i = 0; i<= cantidadAmostrar; i++){ // el for se forja con el valor inicializado, la condicion, y el incremento, los tres separados por (;)
//     if(i % 2===0){
//         console.log(`${i} :es un numero par`)
//     }
//     else{
//         console.log(`${i}:no es par...`)
//     }

// }

const carrito =[

    {nombre: "monitor de 20'", precio:500},
    {nombre: "Television", precio:100},
    {nombre: "tablet", precio:200},
    {nombre: "Audifonos", precio:300},
    {nombre: "teclado", precio:400},
    {nombre: "celular", precio:700},
]

for (let i = 0; i<=carrito.length; i++){
    console.log(carrito[i].nombre)
}

