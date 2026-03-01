/* ============================================================
   RACE DIWAN - Main JavaScript
   ============================================================
   This file handles:
   1. Language toggle (switch between /en/ and /ar/)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // 1. LANGUAGE TOGGLE
  // ============================================================

  const langToggle = document.querySelector('.lang-toggle');

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentPath = window.location.pathname;
      let newPath;

      if (currentPath.includes('/ar/')) {
        newPath = currentPath.replace('/ar/', '/en/');
      } else if (currentPath.includes('/en/')) {
        newPath = currentPath.replace('/en/', '/ar/');
      } else {
        newPath = '/ar/index.html';
      }

      window.location.href = newPath;
    });
  }

});