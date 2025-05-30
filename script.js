// Variables de estado
let currentFontSize = 0;
let isDarkMode = false;
let isHighContrast = false;
let isMonoFont = false;
let customCursorEnabled = false;
let imagesHidden = false;
let linksHighlighted = false;

// Funciones de accesibilidad
function increaseFontSize() {
    if (currentFontSize < 3) {
        document.body.classList.remove(`large-text-${currentFontSize}`);
        currentFontSize++;
        document.body.classList.add(`large-text-${currentFontSize}`);
    }
}

function decreaseFontSize() {
    if (currentFontSize > -3) {
        document.body.classList.remove(`large-text-${currentFontSize}`);
        currentFontSize--;
        document.body.classList.add(`large-text-${currentFontSize}`);
    }
}

function toggleFont() {
    isMonoFont = !isMonoFont;
    if (isMonoFont) {
        document.body.classList.add('mono-font');
    } else {
        document.body.classList.remove('mono-font');
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
}

function toggleContrast() {
    isHighContrast = !isHighContrast;
    document.body.classList.toggle('high-contrast', isHighContrast);

    // Restaurar modo oscuro si estaba activo
    if (!isHighContrast && isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

function toggleCursor() {
    customCursorEnabled = !customCursorEnabled;
    if (customCursorEnabled) {
        document.body.classList.add('custom-cursor');
    } else {
        document.body.classList.remove('custom-cursor');
    }
}

function toggleImages() {
    imagesHidden = !imagesHidden;
    if (imagesHidden) {
        document.body.classList.add('hide-images');
    } else {
        document.body.classList.remove('hide-images');
    }
}

function toggleLinks() {
    linksHighlighted = !linksHighlighted;
    if (linksHighlighted) {
        document.body.classList.add('highlight-links');
    } else {
        document.body.classList.remove('highlight-links');
    }
}

// Navegación responsive
document.querySelector('.navbar-toggle')?.addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar-menu').classList.toggle('active');
});

// Resaltar enlace activo
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

document.getElementById("reset-styles-btn").addEventListener("click", function () {
  const body = document.body;

  // Remueve clases relacionadas a accesibilidad
  body.classList.remove(
    "dark-mode",
    "high-contrast",
    "mono-font",
    "hide-images",
    "highlight-links",
    "custom-cursor"
  );

  // Remueve clases de tamaño de fuente (desde -3 hasta +3)
  for (let i = -3; i <= 3; i++) {
    if (i !== 0) body.classList.remove(`large-text-${i}`);
  }

  // Reinicia el contador de tamaño de fuente si lo usas
  currentFontSize = 0;
});