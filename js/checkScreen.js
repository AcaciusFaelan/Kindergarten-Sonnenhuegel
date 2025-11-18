// Mindestmaße für die normale Website
const minWidth = 350;
const minHeight = 500;

// Funktion prüft Fenstergröße und leitet ggf. weiter
function checkScreenSize() {
  const isTooSmall = window.innerWidth < minWidth || window.innerHeight < minHeight;
  const onErrorPage = window.location.pathname.includes("error.html");

  if (isTooSmall && !onErrorPage) {
    // Zu klein → weiterleiten auf error.html
    window.location.href = "./html/error.html";
  } else if (!isTooSmall && onErrorPage) {
    // Wieder groß genug → zurück zur Hauptseite
    window.location.href = "../index.html";
  }
}

// Beim Laden der Seite prüfen
window.addEventListener('load', checkScreenSize);

// Auch bei Fenstergrößenänderung prüfen
window.addEventListener('resize', checkScreenSize);
