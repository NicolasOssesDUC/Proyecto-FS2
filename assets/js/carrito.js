class Producto {
    id;
    nombre;
    precio;
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }    
}

// Inicializar carrito si no existe
    if (!localStorage.getItem("carrito")) {
        localStorage.setItem("carrito", JSON.stringify([]));
    }

function actualizarContador() {
    // Obtener carrito de localStorage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    // Actualizar el span del contador
    let contadorElemento = document.getElementById("contador");
    if (contadorElemento) {
        contadorElemento.innerText = carrito.length;
    }
    console.log("Carrito actual:", localStorage.getItem("carrito"));
}

document.addEventListener("DOMContentLoaded", actualizarContador);
