document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel'); // Contenedor principal del carrusel
    const images = document.querySelectorAll('.carousel-img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let current = 0;
    let intervalId = null; // Para guardar el ID de nuestro intervalo

    // --- FUNCIÓN PARA MOSTRAR IMAGEN ---
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    // --- FUNCIÓN PARA AVANZAR A LA SIGUIENTE IMAGEN ---
    function nextImage() {
        current = (current + 1) % images.length;
        showImage(current);
    }

    // --- LÓGICA DE LOS BOTONES (sin cambios) ---
    prevBtn.addEventListener('click', () => {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
    });

    nextBtn.addEventListener('click', () => {
        nextImage(); // Reutilizamos la función nextImage
    });

    // --- LÓGICA DEL AUTOPLAY (lo nuevo) ---
    function startAutoplay() {
        // Inicia el cambio automático cada 3 segundos (3000 milisegundos)
        intervalId = setInterval(nextImage, 3000);
    }

    function stopAutoplay() {
        // Detiene el cambio automático
        clearInterval(intervalId);
    }

    // El carrusel se detiene cuando el ratón está encima
    carousel.addEventListener('mouseenter', stopAutoplay);
    // El carrusel se reanuda cuando el ratón se va
    carousel.addEventListener('mouseleave', startAutoplay);

    // --- INICIO ---
    showImage(current); // Muestra la primera imagen
    startAutoplay();    // Inicia el autoplay
});