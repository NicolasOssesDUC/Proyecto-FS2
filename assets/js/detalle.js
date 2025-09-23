// Obtener el parámetro ?id= de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Buscar el producto en el array de productos
// Si tu array 'productos' ya está definido en otro archivo JS, asegúrate de importarlo antes
const producto = productos.find(p => p.id === id);

if (producto) {
    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("descripcion").textContent = producto.descripcion || "Sin descripción disponible";
    document.getElementById("precio").textContent = `$${producto.precio.toLocaleString('es-CL')}`;
    document.getElementById("imagen").src = producto.imagen;
} else {
    document.getElementById("producto-detalle").innerHTML = "<p>Producto no encontrado</p>";
}

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const productoId = parseInt(params.get('id'));

    // Buscar el producto en tu array productos
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    // Rellenar el HTML con los datos
    document.getElementById('imagen').src = producto.imagen;
    document.getElementById('nombre').textContent = producto.nombre;
    document.getElementById('precio').textContent = `$${producto.precio.toLocaleString('es-CL')}`;
    document.getElementById('descripcion').textContent = producto.descripcion;

    // Botón "Agregar al carrito"
    const btnCarrito = document.getElementById('btn-carrito');
    if (btnCarrito) {
        btnCarrito.addEventListener('click', () => {
            agregarAlCarrito(productoId); // usa tu JS de carrito ya definido
        });
    }
});