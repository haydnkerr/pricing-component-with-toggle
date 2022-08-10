const toggle = document.getElementById('toggle');
const toggleAnnually = document.getElementById('toggle-annually');

toggle.addEventListener('change', e => {
  toggleAnnually.classList.toggle('toggle-annually');
});