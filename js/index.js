
//accediendo al html mediantte clase y id
let mensajeError = document.querySelector('.errorForm');
let formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', validar);

//Funcion para validar datos ingresados en el formulario
function validar(e){
    //Previene la acción por defecto del formulario para que no actualice
    e.preventDefault();
    let formArray = e.target;
    let nombre = formArray[0];
    let email = formArray[1];
    let textarea = formArray[2];

    // console.log(mensajeError)

    //Si el nombre ingresado tiene menos de 3 letras muestra un mensaje de error

    if(nombre.value.length < 3){
        mensajeError.style.display = 'block';
        mensajeError.innerText = 'Error! El nombre debe tener mas de 2 caracteres!';
        mensajeError.style.color = 'red';
        //Pone el foco en el input nombre
        document.getElementById('nombre').focus();
    }else{
        mensajeError.style.display = 'none';
    }

    if(!email.value){
        mensajeError.style.display = 'block';
        mensajeError.innerText = 'Error! Debe ingresar un email!';
        mensajeError.style.color = 'red';
        document.getElementById('email').focus();
}else{
            console.log(`Nombre: ${nombre.value}, Email: ${email.value}, mensaje: ${textarea.value}`); 
            //Luego de enviar la informacion vacía los campos y pone el foco en el input nombre
            document.getElementById('nombre').value="";
            document.getElementById('email').value="";
            document.getElementById('textarea').value="";
            document.getElementById('nombre').focus();
            // document.write(`<strong class="msg">Consulta enviada</strong>`);
         } 
}