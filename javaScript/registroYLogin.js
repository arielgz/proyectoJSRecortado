const formularioRegistro = document.querySelector("#formulario-registro");
const nombreElemento = document.querySelector("#nombre");
const apellidoElemento = document.querySelector("#apellido");
const emailElemento = document.querySelector("#email");
const passwordElemento = document.querySelector("#contrasenia");


const userFormulario = document.querySelector("#formulario-usuario");
const userEmail = document.querySelector("#email-user");
const userPassword = document.querySelector("#contrasenia-user");






const listaDeClientes = [];
console.log(typeof listaDeClientes)

let clientesAlLs = JSON.parse(localStorage.getItem("nuevos clientes"))

// let clientesAlLs = localStorage.getItem("clientes")
// const clientesParseados = JSON.parse(clientesAlLs)



class Cliente {
    constructor (nombre, apellido,email,contrasenia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasenia = contrasenia;
    }
}



formularioRegistro.onsubmit = (e) => {
    e.preventDefault(e)
    if(nombreElemento.value !== "",apellidoElemento.value !== "",emailElemento.value !== "", passwordElemento.value !== ""){
        listaDeClientes.push(new Cliente (nombreElemento.value, apellidoElemento.value, emailElemento.value, passwordElemento.value));

        localStorage.setItem("nuevos clientes", JSON.stringify(listaDeClientes))
        // const clientesAJson = JSON.stringify(listaDeClientes)
        // localStorage.setItem("clientes", clientesAJson)
        console.log(listaDeClientes)
        formularioRegistro.reset()

        swal("Usuario Registrado exitosamente!", "", "success");
        
    }else {
        swal({
            title: "Por favor, complete todos los campos",
            text: "",
            icon: "warning",
            });
            formularioRegistro.reset();
    }
    
}









const clientesRegistrados = JSON.parse(localStorage.getItem("nuevos clientes") || []);
console.log(clientesRegistrados);  


function loguear () {
    let nuevoUsuario = clientesRegistrados.find(element => element.email === userEmail.value);

    if(nuevoUsuario === ""){
        swal({
            title: "El Usuario no existe",
            icon: "error", 
        });
    }else if (nuevoUsuario.contrasenia !== userPassword.value){
        swal({
            title: "El Usuario no existe",
            icon: "error",
        });
        
        
    }else{
        window.location.href = "../index.html"
    }
}

userFormulario.onsubmit =(e) =>{
    e.preventDefault(e)
    loguear()
    userFormulario.reset()
}



