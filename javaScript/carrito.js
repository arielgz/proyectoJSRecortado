const carritoContainer = document.getElementsByClassName("seccion-carrito");
const carritoElement = document.getElementsByClassName("productoEnCarrito");
console.log(carritoElement)





const carritoCargado = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carritoCargado)




function mostrarEnCarrito (){
    carritoCargado.forEach(elemento => {
        carritoElement.innerHTML += `
        <div class="compra">
                <img src= ${elemento.img} alt="abrigos">
                <h3>${elemento.nombre}</h3>  <h3>${elemento.precio}</h3>
                <button class="bnt-borrar" id="${elemento.id}">X</button>
            </div> 
        `
    })
}