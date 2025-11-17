// Mobil navigáció és egyszerű űrlap-validáció
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Év frissítése
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Űrlap validáció (client-side, demo)
  const form = document.getElementById('contact-form');
  const statusEl = document.querySelector('.form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      const name = form.name;
      const email = form.email;
      const message = form.message;
      if (!name.value.trim()) { ok=false; name.nextElementSibling.textContent='Kérjük, add meg a neved!'; } else { name.nextElementSibling.textContent=''; }
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
      if (!emailValid) { ok=false; email.nextElementSibling.textContent='Érvényes email címet adj meg!'; } else { email.nextElementSibling.textContent=''; }
      if (!message.value.trim()) { ok=false; message.nextElementSibling.textContent='Írj üzenetet!'; } else { message.nextElementSibling.textContent=''; }
      if (ok) { statusEl.textContent='Köszönjük! Ez egy demó űrlap, nincs adatküldés.'; form.reset(); } else { statusEl.textContent='Kérjük, javítsd a pirosan jelölt mezőket.'; }
    });
  }
});
