const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

//Modal eventos
function startModal(modalEvent) {
  const modal = document.getElementById('modalEvent');
  modal.classList.add('view');
  modal.addEventListener('click', e => {
    if (
      (e.target.id == modalEvent || e.target.className == 'btn-close',
      'form-button')
    ) {
      modal.classList.remove('view');
    }
  });
}

const botton = document.querySelector('.content-menu-image');
botton.addEventListener('click', () => startModal('modal-event'));
