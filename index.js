const contenedorProductos = document.getElementById("contenedorProductos");
const carritoActual = document.getElementById("carritoActual");
const pruebaNav = document.getElementById("numeroCarrito");
const contadorCarrito = document.createElement("p");

const prints = [
    { id: 1, nombre: "Amigos", imagen: "./Media/Imagenes/4.png", precio: 150, cantidad: 1 }//,
    //    { id: 2, nombre: "Oshawott", imagen: "./Media/Imagenes/2.png", precio: 50, cantidad: 1 },
    //    { id: 3, nombre: "Wooper", imagen: "./Media/Imagenes/5.png", precio: 100, cantidad: 1 },
    //    { id: 4, nombre: "Gato", imagen: "./Media/Imagenes/8.png", precio: 200, cantidad: 1 },
    //    { id: 5, nombre: "Tag Team", imagen: "./Media/Imagenes/9.png", precio: 150, cantidad: 1 }
]

const carritodeCompras = [];

const agregarAlCarrito = (itemSeleccionado, carrito) => {
    const printElegido = prints.find(item => item.id === itemSeleccionado)
    carrito.push(printElegido);
    console.log("Se agrego con exito el producto!", carritodeCompras);
}

const eliminardeCarrito = (itemSeleccionado, carrito) => {
    const printElegido = prints.find(item => item.id === itemSeleccionado)
    carrito.pop(printElegido);
    console.log("Se ha quitado con exito el producto!", carritodeCompras);
}

const contadorCarro = () => {
    contadorCarrito.textContent = carritodeCompras.length;
    contadorCarrito.classList.add("carrito");
    pruebaNav.appendChild(contadorCarrito);

}

const mostrarCarrito = () => {
    carritoActual.innerHTML = ""
    carritodeCompras.forEach(item => {
        carritoActual.innerHTML +=
            `
            <div class="card" style="width: 18 rem;">
                <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
                <div class="card-body">
                    <h3 class="card-title">${item.nombre}</h3>
                    <p>Precio: $ ${item.precio}</p>
                    <button class="btnEnviar" id="eliminar${item.id}"> - </button> <button class="btnEnviar" id="agregar${item.id}"> + </button>
                </div>
            </div>
        `
        const botonEliminar = document.getElementById(`eliminar${item.id}`);
        botonEliminar.addEventListener("click", () => {
            eliminardeCarrito(item.id, carritodeCompras);
            contadorCarro();
            mostrarCarrito();
        })
        const botonAgregar = document.getElementById(`agregar${item.id}`);
        botonAgregar.addEventListener("click", () => {
            agregarAlCarrito(item.id, carritodeCompras);
            contadorCarro();
            mostrarCarrito();
        })
    })
}

prints.forEach(item => {
    contenedorProductos.innerHTML +=
        `
    <div class="card" style="width: 18 rem;">
        <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
        <div class="card-body">
            <h3 class="card-title">${item.nombre}</h3>
            <p>Precio: $ ${item.precio}</p>
            <button class="btnEnviar" id="agregarCarrito${item.id}"> Agregar al Carrito </button>
        </div>
    </div>
    `

    const botonAgregar = document.getElementById(`agregarCarrito${item.id}`);
    botonAgregar.addEventListener("click", () => {
        agregarAlCarrito(item.id, carritodeCompras);
        contadorCarro();
        mostrarCarrito();
    })
})



const agregarLocal = (clave, valor) => {
    localStorage.setItem(clave,JSON.stringify(valor));
}

window.localStorage.getItem("carrito");
//JSON.parse (localStorage.getItem("carrito"));

