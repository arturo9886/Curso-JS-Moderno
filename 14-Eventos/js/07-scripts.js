//prevenir el event bubbling con delegation. 

const carDiv = document.querySelector('.card');


                     //le ponemos el evento
carDiv.addEventListener('click',(e)=>{

    if(e.target.classList.contains('categoria')){
        console.log('diste click en categoria');
    }
    if(e.target.classList.contains('precio')){
        console.log('diste click en precio');
    }
    if(e.target.classList.contains('titulo')){
        console.log('diste click en titulo');
    }
})

//en la pagina hay diferentes elementos y debemos de especificar a que le estamos dando click. 

// es bueno usar e.target porque podemos saberespecificamente a que le dimos click, y aplicar,
// reacciones que se asosien en ese elemento