document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('formulario-login');

    if (loginForm) {
        // Guardar placeholders originales al cargar la página
        const inputs = loginForm.querySelectorAll('input[placeholder]');
        inputs.forEach(input => {
            input.dataset.originalPlaceholder = input.placeholder;
        });

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateLoginForm()) {
                alert('Inicio de sesión exitoso');
                window.location.href = 'admin/index.html';
            }
        });
    }
});

function validateLoginForm() {
    let isValid = true;
    clearErrors();

    // Validar correo
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const allowedDomains = ['duoc.cl', 'profesor.duoc.cl', 'gmail.com'];

    if (emailValue === '') {
        setError('email', 'El correo es requerido.');
        isValid = false;
    } else if (emailValue.length > 100) {
        setError('email', 'El correo no debe exceder los 100 caracteres.');
        isValid = false;
    } else {
        const domain = emailValue.substring(emailValue.lastIndexOf('@') + 1);
        if (!allowedDomains.includes(domain.toLowerCase())) {
            setError('email', 'Correo no válido.'); // Mensaje acortado
            isValid = false;
        }
    }

    // Validar contraseña
    const passwordInput = document.getElementById('password');
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === '') {
        setError('password', 'Contraseña requerida.');
        isValid = false;
    } else if (passwordValue.length < 4 || passwordValue.length > 10) {
        setError('password', 'Contraseña no válida.');
        isValid = false;
    }

    return isValid;
}

function setError(fieldId, message) {
    const input = document.getElementById(fieldId);
    if (input) {
        input.classList.add('is-invalid');
        input.value = ''; // Limpiar el valor incorrecto
        input.placeholder = message; // Usar el placeholder para el error
    }
}

function clearErrors() {
    const invalidFields = document.querySelectorAll('.is-invalid');
    invalidFields.forEach(field => {
        field.classList.remove('is-invalid');
        // Restaurar placeholder original
        if (field.dataset.originalPlaceholder) {
            field.placeholder = field.dataset.originalPlaceholder;
        }
    });
}