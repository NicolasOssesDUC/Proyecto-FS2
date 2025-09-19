document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('formulario-login');

    if (loginForm) {
        // Guardar placeholders originales al cargar la página
        const inputs = loginForm.querySelectorAll('input[placeholder]');
        inputs.forEach(input => {
            input.dataset.originalPlaceholder = input.placeholder;
        });

        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        emailInput.addEventListener('blur', () => {
            validateSingleField('email');
        });
        
        passwordInput.addEventListener('blur', () => {
            validateSingleField('password');
        });

        emailInput.addEventListener('input', () => {
            clearFieldError('email');
        });
        
        passwordInput.addEventListener('input', () => {
            clearFieldError('password');
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
    const errorSpan = document.getElementById('error-' + fieldId);
    
    if (input) {
        input.classList.add('is-invalid');
    }
    if (errorSpan) {
        errorSpan.textContent = message;
    }
}

function clearErrors() {
    const invalidInputs = document.querySelectorAll('.is-invalid');
    invalidInputs.forEach(input => {
        input.classList.remove('is-invalid')
    });

    const errorSpans = document.querySelectorAll('.error-message');
    errorSpans.forEach(span => {
        span.textContent = '';
    });
}




// Funcion para validar ingreso de datos del formulario de contacto 
document.addEventListener('DOMContentLoaded', function() {
    const contactoForm = document.getElementById('contacto-form');
    if (contactoForm) {
        contactoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateContactoForm()) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Tu mensaje ha sido enviado correctamente.',
                    confirmButtonColor: '#3085d6'
                });
                contactoForm.reset();
            }
        });
    }
});

function validateContactoForm() {
    let isValid = true;
    clearContactoErrors();

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre.value.trim()) {
        setContactoError(nombre,'El nombre es requerido.');
        isValid = false;
    }

    if (!correo.value.trim() || !emailRegex.test(correo.value.trim())) {
        setContactoError(correo,'Correo electrónico no válido.');
        isValid = false;
    }

    if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
        setContactoError(mensaje,'El mensaje debe tener al menos 10 caracteres.');
        isValid = false;
    }

    return isValid;
}

function setContactoError(input, message) {
    input.classList.add('is-invalid');
    input.value = '';
    input.placeholder = message;
}

function clearContactoErrors() {
    const fields = ['nombre', 'correo', 'mensaje'];
    fields.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.classList.remove('is-invalid');
            // Restaurar placeholder original si lo tienes guardado
            if (input.dataset.originalPlaceholder) {
                input.placeholder = input.dataset.originalPlaceholder;
            }
        }
    });
}

function validateSingleField(fieldId) {
    const input = document.getElementById(fieldId);
    const value = input.value.trim();

    clearSingleError(fieldId);
    
    if (fieldId === 'email') {
        const allowedDomains = ['duoc.cl', 'profesor.duoc.cl', 'gmail.com'];
        if (value === '') {
            setError('email', 'El correo es requerido.');
        } else if (value.length > 100) {
            setError('email', 'El correo no debe exceder los 100 caracteres.');
        } else {
            const domain = value.substring(value.lastIndexOf('@') + 1);
            if (!allowedDomains.includes(domain.toLowerCase())) {
                setError('email', 'Correo no válido.');
            }
        }
    }
    if (fieldId === 'password') {
        if (value === '') {
            setError('password', 'Contraseña requerida.');
        } else if (value.length < 4 || value.length > 10) {
            setError('password', 'Contraseña no válida.');
        }
    }
}

function clearSingleError(fieldId) {
    const input = document.getElementById(fieldId);
    const errorSpan = document.getElementById('error-' + fieldId);

    if (input.classList.contains('is-invalid')) {
        input.classList.remove('is-invalid');
    }
    if (errorSpan.textContent !== '') {
        errorSpan.textContent = '';
    }
}