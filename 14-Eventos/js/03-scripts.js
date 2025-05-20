// Eventos que suceden en el teclado. 

const busqueda = document.querySelector('.busqueda');

// bbusqueda.addEventListener('keydown',()=>{
//     console.log('escribiendo')
// });

// //Existe otro que es keyupp, lo que hace es que se activa tanpronto soltemos la tecla del teclado. 

// bbusqueda.addEventListener('keyup',()=>{
//     console.log('liberado.')
// })

// //blur significa, que cuando el input pierde el foco, es decir que despues de cliquear en el imput, 
// //clickeamos a otro lado o le damos a tab, puede crear un evento. 

// bbusqueda.addEventListener('blur',()=>{
//     busqueda.style.backgroundColor='green';

// })

// //Copy, este evento pasa cuando copiamos algo del input. 

// bbusqueda.addEventListener('copy', ()=>{
//     console.log('Copiando!.')
// })

// //Paste es cuando pegas en el input.

// bbusqueda.addEventListener('paste', ()=>{
//     console.log('Pegando!.')
// })

// //cut: cuando cortas es decir contrl x o command x.

// bbusqueda.addEventListener('cut', ()=>{
//     console.log('cortando!.')
// })

// // el mas comun de todo es input. este acepta todos los eventos anteriores excepto por el blur. 

// bbusqueda.addEventListener('input.', ()=>{
//     console.log('todo!.')
// })

//conforme lo que se escribe, es importante confirmar lo que se esta escribiendo para que esa informacion se valide. 


                      //en el evento hay mucha informacion.
busqueda.addEventListener('input',(mamaguebo)=>{
    console.log(mamaguebo.target.value);
})

//el parametro que ponemos, nos da mucha informacion del evente, en que formularo en que clase se ejecuto etc.

//si le ponemosel .type nos dira sobre que elemento estamos trabajando. 

// si le ponemos en .target, nos dira en que input en especifico estamos escribiendo. 

//si queremos confirmar lo que el usuario esta escribeindo, ponemos .target.value. EJM.

// como validar un formulario. 

busqueda.addEventListener('input',(e)=>{
    if(e.target.value===""){
        alert('Este CAMPO ES OBLIGATORIO');
        busqueda.style.backgroundColor="black";
        console.log('fallo la validacion');
    }
})