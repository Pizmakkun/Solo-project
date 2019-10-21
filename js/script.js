'use strict'

function toggleMenu(visible) {
document.querySelector('.menu').classList.toggle('show', visible)
}
window.onload=function() {
document.querySelector('.hamburger').addEventListener('click', function(e){
	e.preventDefault();
	toggleMenu()
	alert(1)
});
}