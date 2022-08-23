// variables //
const nombre = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const boton = document.querySelector('#boton');
const formulario = document.querySelector('.formulario');

// eventos //
registrareventos();
function registrareventos(){
    nombre.addEventListener('blur', validarcampos);
    email.addEventListener('blur', validarcampos);
    password.addEventListener('blur', validarcampos);

    boton.addEventListener('click', enviandodatos);
    document.addEventListener('DOMContentLoaded', () => {
        boton.disabled = true;
        boton.classList.add('boton');
    })
}


// funciones //
function validarcampos(e){
    e.preventDefault();

    if(e.target.value.length > 0){

        const error = document.querySelector('.error');
        if(error){
            error.remove();
        }
        console.log('hay datos');
    } else {
        mostrarerror('Todos los campos son obligatorios');
    }

    if(nombre.value !== '' && email.value !== '' && password.value !== ''){
        boton.disabled = false;
        boton.classList.remove('boton');
    } else {
        mostrarerror('Todos los campos son obligatorios');

        return;
    }
}

function mostrarerror(mensaje){
    const error = document.createElement('p');
    error.classList.add('error');
    error.textContent = mensaje;

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(error);
    }

    setTimeout(() => {
        error.remove();
    }, 3000);
}

function enviandodatos(e){
    e.preventDefault();

    const enviando = document.createElement('p');
    enviando.textContent = 'Enviando datos..';
    enviando.classList.add('correcto');

    formulario.insertBefore(enviando, document.querySelector('#boton'));

    setTimeout(() => {
        enviando.remove();

        resetform();
    }, 3000);
}

function resetform(){
    formulario.reset();
    boton.disabled = true;
    boton.classList.add('boton');
}