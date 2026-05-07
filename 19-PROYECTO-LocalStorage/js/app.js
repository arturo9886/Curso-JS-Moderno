//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Events listeners
eventListeners();
function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}


//Funciones

function agregarTweet(e){
    e.preventDefault();

    //textarea donde el usuario escribe.
    const tweet = document.querySelector('#tweet').value

    //Validacion...
    if (tweet === ''){
        console.log('no puede ir vacio')
        mostrarError('no puede ir vacio')
        return; // Evita que se ejecuten mas lineas de codigo.  
    }

    const tweetobj = {
        id:Date.now(),
        texto:tweet  // en verciones recientes llave y valor pueden ser iguales ejm: tweet: tweet. Y si son iguales puede poner un solo texto y lo toma como los dos 
    }                // valores en uno.

    // A;ADIR AL ARREGLO DE TWEETS.
    tweets = [...tweets, tweetobj];

    console.log(tweets)

    //una vez agregado, vamos a crear el HTML.

    crearHTML();

    //reiniciar el formulario.
    formulario.reset()

}

// Mostrar mensaje de error

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

//muestra un listado de los tweets.

function crearHTML() {

    limpiarHTML()

    if(tweets.length > 0){
        tweets.forEach((tweet)=>{
            //crear HTML

            const li = document.createElement('li');

            //anadir el texto
            li.textContent = tweet.texto;

            listaTweets.appendChild(li)

        });
    }

}

//Limpiar el html

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}