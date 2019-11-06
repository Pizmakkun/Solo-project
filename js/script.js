'use strict'

function toggleMenu() {
document.querySelector('.sidebar').classList.toggle('show')
};
function removeMenu() {
	document.querySelector('.sidebar').classList.remove('show')
};

document.querySelector('.hamburger').addEventListener('click', function(e){
	e.preventDefault();
	toggleMenu();
});
document.querySelector('main').addEventListener('click', function(e){
	e.preventDefault();
	removeMenu();
});

