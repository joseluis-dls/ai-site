<<<<<<< HEAD
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
        currentFontSize++;
        document.body.classList.remove('large-text-1', 'large-text-2', 'large-text-3');
        document.body.classList.add(`large-text-${currentFontSize}`);
    }
}

function decreaseFontSize() {
    if (currentFontSize > 0) {
        document.body.classList.remove(`large-text-${currentFontSize}`);
        currentFontSize--;
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
=======
let fontSizeLevel = 0;

function increaseFontSize() {
  if (fontSizeLevel < 3) {
    document.documentElement.style.fontSize = `${16 + fontSizeLevel * 4 + 4}px`;
    fontSizeLevel++;
  }
}

function decreaseFontSize() {
  if (fontSizeLevel > -3) {
    document.documentElement.style.fontSize = `${16 + fontSizeLevel * 4 - 4}px`;
    fontSizeLevel--;
  }
}

function toggleFont() {
  document.body.style.fontFamily = 
    document.body.style.fontFamily === "Arial" ? "Verdana" : "Arial";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

function toggleCursor() {
  document.body.classList.toggle("cursor-big");
}

function toggleImages() {
  document.querySelectorAll("img").forEach(img => img.classList.toggle("hidden"));
}

function toggleLinks() {
  document.querySelectorAll("a").forEach(link => link.classList.toggle("highlighted"));
}
>>>>>>> 03357fefa2177b6443da43b8829132bc09642d63
