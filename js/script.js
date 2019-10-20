'use strict'

function toggleMenu(visible) {
document.querySelector('.menu').classList.toggle('show', visible)
}

document.querySelector('.hamburger').addEventListener('click', function(event) {
event.preventDefault();
toggleMenu()
});