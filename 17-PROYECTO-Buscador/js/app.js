
//VARIABLES
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//contenedor de los resultados
const resultado = document.querySelector('#resultado')
const max = new Date().getFullYear();
const min = max - 15;

//Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


//EVENTOS
document.addEventListener('DOMContentLoaded',()=> {
    mostrarAutos(autos);//Muestra los automoviles al cargar

    //Llena las opciones de a;o.
    llenarSelect()
})


//Event listener para los selectores de busqueda.
marca.addEventListener('change',function(e){
    datosBusqueda.marca = e.target.value;
    filtrarAuto()
})

year.addEventListener('change',function(e){
    datosBusqueda.year = parseInt(e.target.value);
    console.log(datosBusqueda);
    filtrarAuto()
})

minimo.addEventListener('change',function(e){
    datosBusqueda.minimo = e.target.value;
    console.log(datosBusqueda); 
    filtrarAuto()

})

maximo.addEventListener('change',function(e){
    datosBusqueda.maximo = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
})

puertas.addEventListener('change',function(e){
    datosBusqueda.puertas = parseInt(e.target.value);
    console.log(datosBusqueda)
    filtrarAuto();

})

transmision.addEventListener('change',function(e){
    datosBusqueda.transmision = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();

})

color.addEventListener('change',function(e){
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda)
    filtrarAuto();

})

//FUNCIONES
function mostrarAutos(autos){
    limpiarHtml()

    autos.forEach(function(auto){
    const autoHTML = document.createElement('p')
    autoHTML.textContent = 
    `
    ${auto.marca}-
    ${auto.year}-
    Precio: ${auto.precio}-
    Puertas: ${auto.puertas}-
    Transmisión: ${auto.transmision}-
    Color: ${auto.color}-
    `
    resultado.appendChild(autoHTML);
})
}

//limpiar HTML

function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

//Genera los anos del select
function llenarSelect(){
    for (let i=max; i>=min; i--){
        const opcion  = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i
        year.appendChild(opcion); //agrega las opciones del a;o al select.
    }
}

//Funcio que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarColor).filter(filtrarTransmision)

    if (resultado.length){
        mostrarAutos(resultado)
    }
    else{
        limpiarHtml()
        noResultado()
    }

    // console.log(resultado)
}

function noResultado(){
    const mensaje = document.createElement('div')
    mensaje.classList.add('alerta', 'error')
    mensaje.textContent = 'No hay resultado'
    resultado.appendChild(mensaje)    
}

function filtrarMarca(auto){
    if (datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
} 

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }
    return auto;
} 

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas
    }
    return auto
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }
    return auto
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }
    return auto 
}

