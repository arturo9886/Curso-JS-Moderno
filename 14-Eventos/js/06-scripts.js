/* Event Bubbling.

esto significa que tiees un evento y este evento se propaga en lugares
no deseados. 

*/

const carDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const titulo = document.querySelector('.titulo')

carDiv.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('click en card');
})

infoDiv.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('click en info');

})

titulo.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('click en titulo');

})

// El stop propagation lo que hace es que es un tipo de break que hace que el evento finalice tan pronto cumpla
//su fucnion. 