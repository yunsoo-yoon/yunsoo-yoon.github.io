/* ===================== js/main.js ===================== */
// Put this at js/main.js
(function(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  // Smooth scroll to anchor if hash present on projects/research pages
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
  }
})();