var tbody = document.querySelector("#tbody")
var textArea = document.querySelector("#usuarioArea")

let xhr_Usuario = new XMLHttpRequest()
xhr_Usuario.open('GET','https://localhost:44385/api/persona')

xhr_Usuario.addEventListener('load', () =>{
    let usuario = JSON.parse(xhr_Usuario.response)
    

        if(usuario.exito ==1){
            for (let i = 0; i < usuario.data.length; i++) {     
            let fila = document.createElement('tr')
            let tdId = document.createElement('td')
            let tdNombre = document.createElement('td')
            let tdApellido = document.createElement('td')
            let tdDNI = document.createElement('td')
            let tdBoton = document.createElement('td')
            let botonModificar = document.createElement('button')
            botonModificar.type = 'button'
            botonModificar.innerHTML = 'modificar'
            botonModificar.classList.add('btn-warning')
            let botonEliminar = document.createElement('button')
            botonEliminar.type = 'button'
            botonEliminar.innerHTML= 'Eliminar'
            botonEliminar.classList.add('btn-danger')
            
            tdId.innerHTML = usuario.data[i].id
            tdNombre.innerHTML = usuario.data[i].nombre
            tdApellido.innerHTML = usuario.data[i].apellido
            tdDNI.innerHTML = usuario.data[i].dni
            
            tdBoton.appendChild(botonModificar) 
            tdBoton.appendChild(botonEliminar)          
            fila.appendChild(tdNombre)
            fila.appendChild(tdApellido)
            fila.appendChild(tdDNI)
            fila.appendChild(tdBoton)
            tbody.appendChild(fila)      
            
            console.log(usuario.data[i]);
            botonModificar.addEventListener('click',Modificar)
            botonEliminar.addEventListener('click',Eliminar)

           //FUNCIÓN PARA MODIFICAR
            function Modificar(){
                usuarioSeleccionado = tdId.innerHTML
                console.log(usuarioSeleccionado)
                const url = 'https://localhost:44385/api/persona'
                const data = {        
                    "id" : parseInt(usuarioSeleccionado),
                    "nombre": prompt("Nombre"),
                    "Apellido": prompt("Apellido"),
                    "Dni": parseInt(prompt("Dni"))
                    }
                    
                fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
                })
                .then(response => response.json())
                .then(respuesta => console.log(respuesta))
                .catch(error => console.log(`Hubo un error: ${error}`))

                window.location.reload();
            }

            //FUNCIÓN PARA ELIMINAR
            function Eliminar(){
                usuarioSeleccionado = tdId.innerHTML
                const url = 'https://localhost:44385/api/persona'
                const data = {        
                    "id" : parseInt(usuarioSeleccionado),                   
                    }
                fetch(url,{
                    method:'DELETE',
                    body: JSON.stringify(data),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(respuesta => console.log(respuesta))
                .catch(error => console.log(`Hubo un error: ${error}`))

                window.location.reload();
            }
        }
        }else{
            console.log("salio algo mal")
        }
        
    }); xhr_Usuario.send()



































