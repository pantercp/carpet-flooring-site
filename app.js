const menuBtn = document.querySelector('.menu-btn');
const dropMenu = document.querySelector('.container-drop');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    dropMenu.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    dropMenu.classList.remove('open');
    menuOpen = false;
  }
});