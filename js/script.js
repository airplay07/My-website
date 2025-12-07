// Toon het huidige jaar in de footer
// Wacht tot het DOM geladen is
document.addEventListener('DOMContentLoaded', function() {
  // Haal eerst het huidige jaar op
  const currentYear = new Date().getFullYear();
  // Toon huidige jaar daarna in het element met id "year" in footer
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = currentYear;
  }
});