///. for each para iterar un array

const carrito =[

        {nombre: "monitor de 20'", precio:500},
        {nombre: "Television", precio:100},
        {nombre: "tablet", precio:200},
        {nombre: "Audifonos", precio:300},
        {nombre: "teclado", precio:400},
        {nombre: "celular", precio:700},
]


for (let i=0; i < carrito.length; i++){
    
    console.log(carrito[i]);
}


//usamos el bcle for para iterar sobre cada objeto del array. 

//si queremos acceder al nombre, simplemente ponemos el (.nombre).

for (let i=0; i<carrito.length; i++){
    console.log(carrito[i].nombre);
}

//si queremos ponerle el precio tambienm, tendremos que utilizar los template strings, y llamar las variables con el simbolo de dolar y abrir las llaves.

for (let i=0; i<carrito.length;i++){
    console.log(`${carrito[i].nombre} - precio: ${carrito[i].precio}`);
}

//javascript tiene sus propios metodos para iterar sobre un arreglo que es mas sencillo. 

// aqui veremos un array method. 

//FOR EACH

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
})

// la i ya no es necesario ya que estamos iterando sobre producto.

//estos dos codigos hacen basicamente lo mismo.