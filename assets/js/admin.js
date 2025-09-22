(function() {
    // 1. Obtener el usuario de la sesión
    const usuarioLogueadoString = sessionStorage.getItem('usuarioLogueado');
    
    // Si no hay nadie logueado, redirigir al login.
    if (!usuarioLogueadoString) {
        console.log('Acceso denegado: No hay usuario en sesión.');
        window.location.href = '../login.html';
        return; // Detener la ejecución
    }

    // 2. Convertir el string a un objeto
    const usuario = JSON.parse(usuarioLogueadoString);

    // 3. Comprobar si el rol es 'Administrador'
    if (usuario.rol !== 'Administrador') {
        console.log(`Acceso denegado: El usuario ${usuario.nombre} no tiene rol de Administrador.`);
        // Si no es admin, lo enviamos a la página principal de la tienda.
        window.location.href = '../index.html';
    }

    // Si todo está bien, el script termina y la página de admin se carga normalmente.
    console.log(`Acceso permitido: Hola, ${usuario.nombre}.`);
})();
