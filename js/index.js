

let mensajeError = document.querySelector('.errorForm')
let formulario = document.querySelector('#formulario')


formulario.addEventListener('submit', validar)

function validar(e){
    e.preventDefault()
    let formArray = e.target
    let nombre = formArray[0]
    let email = formArray[1]

    // console.log(mensajeError)

    if(nombre.value.length < 3){
        mensajeError.style.display = 'block'
        mensajeError.innerText = 'Error! El nombre debe tener mas de 2 caracteres!'
        mensajeError.style.color = 'red'
        document.getElementById('nombre').focus();
    }else{
        mensajeError.style.display = 'none'
    }

    if(!email.value){
        mensajeError.style.display = 'block'
        mensajeError.innerText = 'Error! Debe ingresar un email!'
        mensajeError.style.color = 'red'
        document.getElementById('email').focus();
}else{
            console.log(`Nombre: ${nombre.value}, Email: ${email.value}`) 
            document.getElementById('nombre').value="";
            document.getElementById('email').value="";
            document.getElementById('nombre').focus();
            document.write(`<strong class="msg">Consulta enviada</strong>`)
         } 
}


