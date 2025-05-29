const navMenu = document.querySelector('.nav-menu');

function ontogglemenu(e) {
  e.name = e.name === 'menu' ? 'close' : 'menu';
  navMenu.classList.toggle('show-menu');
}

