
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
navToggle && navToggle.addEventListener('click', ()=> {
  document.querySelector('.nav-list').classList.toggle('open');
});

// Simple form validation: check required and email contains '@'
const form = document.getElementById('contactForm');
const formResult = document.getElementById('formResult');
form && form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const email = document.getElementById('email').value || '';
  if(!email.includes('@')){
    formResult.textContent = 'Ошибка: введите корректный email (должен содержать @).';
    formResult.style.color = 'crimson';
    return;
  }
  // For demo: just show success message (replace with fetch/AJAX to real endpoint when hosted)
  formResult.textContent = 'Спасибо! Ваше сообщение отправлено (демо).';
  formResult.style.color = 'green';
  form.reset();
});
