//CAPTURA
var boton = document.querySelector('#btnEnviar')
var input = document.querySelector('#iNombre')
var input2 = document.querySelector('#iApellido')
var input3 = document.querySelector('#iDocumento')


//LISTENERS
boton.addEventListener('click', enviarJson)

//FUNCIONES
function enviarJson(){
const url = 'https://localhost:44385/api/persona'
const data = {        
    "nombre": document.querySelector('#iNombre').value,
    "Apellido": document.querySelector('#iApellido').value,
    "Dni": parseInt(document.querySelector('#iDocumento').value)
    }

fetch(url,{
method: 'POST',
body: JSON.stringify(data),
headers: {
    'Content-Type': 'application/json'
}
})
.then(response => response.json())
.then(respuesta => console.log(respuesta))
.catch(error => console.log(`Hubo un error: ${error}`))
}

    
































