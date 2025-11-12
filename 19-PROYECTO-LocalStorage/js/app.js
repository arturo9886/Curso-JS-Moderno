// Variables 

const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')

let tweets = [];



//Event Listeers

eventListeners();

function eventListeners(){

    //cuando el usuario agrega un nuevo tweet

    formulario.addEventListener('submit',agregarTweet)

    //cuando el docuento esta listo
    document.addEventListener('DOMContentLoaded',()=>{
        tweets = JSON.parse(localStorage.getItem('tweets') ||[])

        console.log(tweets)
    })

}



//Funciones

function agregarTweet(e){
    e.preventDefault()

//textarea donde el usuario escribe

    const tweet = document.querySelector('#tweet').value;
    //validacion

    if(tweet === ''){
        mostrarError('No puede ir vacio')
        return; // evita que se sigan ejecutando mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }


    //agregar al arreglo de tweets

    tweets = [...tweets, tweetObj]


    //Una vez agregado, vamos a crear el html
    crearHtml() 

    //reiniciar el formulario

    formulario.reset();``
}

function mostrarError(error){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error
    mensajeError.classList.add('error')

    const contenido = document.querySelector('#contenido')
    
    contenido.appendChild(mensajeError)
    
    setTimeout(()=>{
        mensajeError.remove()
    },3000)
    
}


// Mostrar un listadode los tweets

function crearHtml(){

    limpiarHTML()

    if (tweets.length> 0){
        tweets.forEach( tweet=>{
            // crear el html

            // agregar un boton de eliminar 

            const btnEliminar = document.createElement('a')

            btnEliminar.classList.add('borrar-tweet')

            btnEliminar.innerText="x"

            //agregar funcion de eliminar

            btnEliminar.onclick = ()=>{
                borrarTweet(tweet.id)
            }

            const li = document.createElement('li');

            // agregar el texto

            li.innerText = tweet.tweet;

            //asignar el boton

            li.appendChild(btnEliminar);

            // insertarlo al HTML

            listaTweets.appendChild(li);

        });
    }

    sincronizarStorage()


}

//Agrega los tweets actuales a localstorage

function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets))
}

//eliminar un tweet

function borrarTweet(id){
    tweets = tweets.filter (tweet => tweet.id !== id )

    crearHtml()
}

//limpiear html

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }

}

