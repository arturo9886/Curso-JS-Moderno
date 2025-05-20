/* eventos que suceden con el scroll de mouse.

los eventos de scroll siepre sucederan en la ventana global, osea window. 

el scroll y: Arriba y abajo
el scroll x: izquiera y derecha. 

document es aprte de la ventana global. 
*/

// window.addEventListener('scroll',()=>{
//     console.log('scroll');
// })

//scroll vertical

// window.addEventListener('scroll',()=>{
//   const scrollpx = window.scrollY;
//   console.log(scrollpx);  
// })

// esto lo que hace es que nos muestra la cantidad de los pixeles a los que le das scroll. 

// como hacer animaciones de scroll


window.addEventListener('scroll', ()=>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 784){                               // lo recomendable es que la consola nos mande la ubicacion
        console.log('el elemento ya esta visible');         // Para Debugear.
    }
    else{
        console.log('no, aun no. Sigue dando scroll!');
    }
})

//este metodo tiene mucha informacion, nos dice a que distancia se encuentra este elemento, 
// es decir a que distancia de pixeles esta ese elemento.