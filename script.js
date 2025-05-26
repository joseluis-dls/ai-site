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
