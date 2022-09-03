const productosElement = document.querySelector("#containerCard");
const botonAgregar = document.getElementsByClassName("btn-agregar");

// console.log(carritoContainer);
// console.log(carritoElement);

console.log(productosElement)



const productosAlCarrito = JSON.parse(localStorage.getItem("carrito")) || []






function mostrarIndumentarias (array) {
    array.forEach(elemento => {
        productosElement.innerHTML +=`
        <div class="content-card">
                <div class="img-card">
                    <img src=${elemento.img}>
                </div>
                <div class="texto-card">
                    <h3>${elemento.nombre}</h3>
                    <span>$ ${elemento.precio.toFixed(3)}</span>
                </div>
                <div class="btn-card"> 
                <button class="btn-agregar" id="${elemento.id}">Agregar al carrito</button>
                </div>
        </div> `
        
    });
}
mostrarIndumentarias(indumentaria);





function filtrarIndumentaria (e){
    let boton = e.target
    console.log(boton)   
    let btnCategoria = boton.innerText;
    console.log(btnCategoria)
    const productosFiltrados = indumentaria.filter(elemento => elemento.categoria === btnCategoria)
    console.log(productosFiltrados)
    productosElement.innerHTML = ""

    mostrarIndumentarias(productosFiltrados);
}

const botonDeFiltro = document.getElementsByClassName("boton-nav")
for(boton of botonDeFiltro){
    boton.addEventListener("click", filtrarIndumentaria)
}





function agregarItemACarrito (e) {   
const botonCarrito = e.target
const botonId = Number(botonCarrito.id)
const productoAgregado = indumentaria.find(elemento => elemento.id === botonId)
productosAlCarrito.push(productoAgregado)
console.log(productosAlCarrito)



localStorage.setItem("carrito", JSON.stringify(productosAlCarrito));

Toastify({
    text: `Agregaste ${productoAgregado.nombre}  al carrito`,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
    background: "linear-gradient(to right, #373B44, ,#4286f4)"
    },
    onClick: function(){} // Callback after click
    }).showToast();

mostrarEnCarrito()

}


for ( botonCarrito of botonAgregar) {
    botonCarrito.addEventListener("click", agregarItemACarrito)
}



























