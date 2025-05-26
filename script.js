// Funcionalidad de accesibilidad
document.addEventListener('DOMContentLoaded', function() {
    // Variables de estado
    let currentFontSize = 0;
    let isDarkMode = false;
    let isHighContrast = false;
    let isMonoFont = false;
    let areImagesHidden = false;
    let areLinksHighlighted = false;
    let areLinksRemoved = false;
    
    // Selectores de elementos
    const body = document.body;
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const fontIncreaseBtn = document.querySelector('.font-size-increase');
    const fontDecreaseBtn = document.querySelector('.font-size-decrease');
    const toggleFontBtn = document.querySelector('.toggle-font');
    const darkModeBtn = document.querySelector('.dark-mode');
    const highContrastBtn = document.querySelector('.high-contrast');
    const hideImagesBtn = document.querySelector('.hide-images');
    const highlightLinksBtn = document.querySelector('.highlight-links');
    const removeLinksBtn = document.querySelector('.remove-links');
    
    // Menú hamburguesa para móviles
    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        navbarToggle.classList.toggle('active');
    });
    
    // Aumentar tamaño de fuente
    fontIncreaseBtn.addEventListener('click', function() {
        if (currentFontSize < 3) {
            currentFontSize++;
            body.classList.remove('large-text-1', 'large-text-2', 'large-text-3');
            body.classList.add(`large-text-${currentFontSize}`);
        }
    });
    
    // Disminuir tamaño de fuente
    fontDecreaseBtn.addEventListener('click', function() {
        if (currentFontSize > 0) {
            body.classList.remove(`large-text-${currentFontSize}`);
            currentFontSize--;
        }
    });
    
    // Cambiar tipo de fuente
    toggleFontBtn.addEventListener('click', function() {
        isMonoFont = !isMonoFont;
        if (isMonoFont) {
            body.classList.add('mono-font');
        } else {
            body.classList.remove('mono-font');
        }
    });
    
    // Modo oscuro
    darkModeBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            body.setAttribute('data-theme', 'dark');
            darkModeBtn.textContent = '☀️';
        } else {
            body.removeAttribute('data-theme');
            darkModeBtn.textContent = '🌙';
        }
    });
    
    // Alto contraste
    highContrastBtn.addEventListener('click', function() {
        isHighContrast = !isHighContrast;
        if (isHighContrast) {
            body.setAttribute('data-theme', 'high-contrast');
        } else {
            body.removeAttribute('data-theme');
        }
    });
    
    // Ocultar imágenes
    hideImagesBtn.addEventListener('click', function() {
        areImagesHidden = !areImagesHidden;
        if (areImagesHidden) {
            body.classList.add('hide-images');
        } else {
            body.classList.remove('hide-images');
        }
    });
    
    // Resaltar enlaces
    highlightLinksBtn.addEventListener('click', function() {
        areLinksHighlighted = !areLinksHighlighted;
        if (areLinksHighlighted) {
            body.classList.add('highlight-links');
        } else {
            body.classList.remove('highlight-links');
        }
    });
    
    // Quitar enlaces
    removeLinksBtn.addEventListener('click', function() {
        areLinksRemoved = !areLinksRemoved;
        if (areLinksRemoved) {
            body.classList.add('remove-links');
        } else {
            body.classList.remove('remove-links');
        }
    });
    
    // Cerrar menú al hacer clic en un enlace (para móviles)
    document.querySelectorAll('.navbar-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navbarMenu.classList.remove('active');
            navbarToggle.classList.remove('active');
        });
    });
    
    // Cambiar cursor personalizado (ejemplo, necesitarías tener la imagen)
    // body.classList.add('custom-cursor');
});

// Función para el formulario de contacto (contacto.html)
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Aquí iría la lógica para enviar el correo
    // Esto normalmente se haría con un backend o servicio como Formspree
    
    // Simulación de envío
    console.log('Datos del formulario:', data);
    
    // Mostrar mensaje de éxito
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    form.reset();
}

// Si hay un formulario de contacto en la página
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
}