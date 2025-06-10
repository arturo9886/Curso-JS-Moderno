document.addEventListener ('DOMContentLoaded', function(){ // el vento que tiene significa que funcionara cuando se cargue
                                                           //el HTML
    //seleccionar los elementos de la interfaz

    const email ={
        email: '',
        asunto:'',
        mensaje:'',


    }

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner');

    
    console.log(inputEmail);
    console.log(inputAsunto);
    console.log(inputMensaje);

    // ahora lo que haremos es agregar un eventListener a los query selector que tenemos. 

    inputEmail.addEventListener('input',validar)

    inputAsunto.addEventListener('input',validar)

    inputMensaje.addEventListener('input',validar)

    formulario.addEventListener('submit',enviarEmail);

    btnReset.addEventListener('click',function(e){
        e.preventDefault();

        reset();
    })

    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add('flex')
        spinner.classList.remove('hidden');

        setTimeout(()=>{
            spinner.classList.remove('flex')
            spinner.classList.add('hidden');
            reset();

            //crear una alerta
            const alertaExito = document.createElement('P')
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 't-10',
            'font-bold', 'text-sm', 'uppercase');

            alertaExito.textContent = 'Enviado con Exito'

            formulario.appendChild(alertaExito);

            setTimeout(()=>{
                alertaExito.remove();
            }, 3000);

        }, 3000);
    }


    function validar(e){
        console.log()
        if (e.target.value.trim() === ''){ //LE PONEMOS TRIM PARA OBVIAR O ELIMINAR LOS ESPACIOS EN BLANCO.
            mostrarAlerta(`El campo ${e.target.id} es OBLIGATORIO!`, e.target.parentElement)
            email[e.target.name] = ''
            comprobarEmail()
            return;
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido', e.target.parentElement)
            email[e.target.name] = ''
            comprobarEmail();
            return;
        };

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores.aa

        email[e.target.name] = e.target.value.trim().toLowerCase();

        //comprobar el objeto de email

        comprobarEmail()

    }

    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia)

        //Generar Alerta en HTML
        const error = document.createElement('p');
        error.textContent = mensaje
        console.log(error);
        error.classList.add('bg-red-600', 'text-thite', 'p-2', 'text-center')
        //Inyectar el error al formulario.

        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        //comprueba que ya existe una alerta.
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/  //esto es una expresion regular.
        const resultado = regex.test(email)
        console.log(resultado);   
        return resultado;

    }

    function comprobarEmail(){
        console.log(email);

        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    };

    function reset(){
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }

});