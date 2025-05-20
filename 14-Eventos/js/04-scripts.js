//Eventos que suceden en un formularo

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarformulario)


//para el prevent default, lo podemos poner el eento en la parentesis de la funcion. 
function validarformulario(e){
    e.preventDefault();
    console.log('buscando...');
    console.log(e.target.action)
}