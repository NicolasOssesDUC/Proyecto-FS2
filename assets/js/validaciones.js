document.addEventListener('DOMContentLoaded', function() {
    initLoginForm();
    initContactoForm();
});

// --- VALIDACIÓN FORMULARIO LOGIN ---

function initLoginForm() {
    const loginForm = document.getElementById('formulario-login');
    if (!loginForm) return;

    loginForm.addEventListener('input', (event) => validateSingleField(event.target));
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateLoginForm()) {
            alert('Inicio de sesión exitoso');
            // window.location.href = 'admin/index.html';
        }
    });
}

function validateLoginForm() {
    const isEmailValid = validateSingleField(document.getElementById('email'));
    const isPasswordValid = validateSingleField(document.getElementById('password'));
    return isEmailValid && isPasswordValid;
}

function validateSingleField(field) {
    if (!field || !field.id) return true;

    let isValid = true;
    let message = '';

    switch (field.id) {
        case 'email':
            const emailValue = field.value.trim();
            const allowedDomains = ['duoc.cl', 'profesor.duoc.cl', 'gmail.com'];
            if (emailValue === '') {
                message = 'El correo es requerido.';
                isValid = false;
            } else if (emailValue.length > 100) {
                message = 'El correo excede los 100 caracteres.';
                isValid = false;
            } else {
                const domain = emailValue.substring(emailValue.lastIndexOf('@') + 1);
                if (emailValue.lastIndexOf('@') === -1 || !allowedDomains.includes(domain.toLowerCase())) {
                    message = 'El dominio del correo no es válido.';
                    isValid = false;
                }
            }
            break;

        case 'password':
            const passwordValue = field.value.trim();
            if (passwordValue === '') {
                message = 'La contraseña es requerida.';
                isValid = false;
            } else if (passwordValue.length < 4 || passwordValue.length > 10) {
                message = 'La contraseña debe tener entre 4 y 10 caracteres.';
                isValid = false;
            }
            break;
    }

    setFieldError(field.id, message);
    return isValid;
}

function setFieldError(fieldId, message) {
    const errorSpan = document.getElementById(`error-${fieldId}`);
    const input = document.getElementById(fieldId);
    if (errorSpan && input) {
        errorSpan.textContent = message;
        message ? input.classList.add('is-invalid') : input.classList.remove('is-invalid');
    }
}

// --- VALIDACIÓN FORMULARIO CONTACTO ---

function initContactoForm() {
    const contactoForm = document.getElementById('contacto-form');
    if (!contactoForm) return;

    contactoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateContactoForm()) {
            alert('¡Mensaje enviado! Tu mensaje ha sido enviado correctamente.');
            contactoForm.reset();
            clearContactoErrors();
        }
    });
}

function validateContactoForm() {
    let isValid = true;
    clearContactoErrors();

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre.value.trim()) {
        setContactoError(nombre, 'El nombre es requerido.');
        isValid = false;
    }

    if (!correo.value.trim() || !emailRegex.test(correo.value.trim())) {
        setContactoError(correo, 'Correo electrónico no válido.');
        isValid = false;
    }

    if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
        setContactoError(mensaje, 'El mensaje debe tener al menos 10 caracteres.');
        isValid = false;
    }

    return isValid;
}

function setContactoError(input, message) {
    input.classList.add('is-invalid');
    // Asumimos que no hay span de error, usamos placeholder
    input.placeholder = message;
    input.value = '';
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