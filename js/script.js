'use strict'

// side menu toggling

function toggleMenu() {
document.querySelector('.sidebar').classList.toggle('show');
document.querySelector('.dim').classList.toggle('dimmed');
};

function removeMenu() {
	document.querySelector('.sidebar').classList.remove('show');
	document.querySelector('.dim').classList.remove('dimmed');
};

document.querySelector('.hamburger').addEventListener('click', function(e){
	e.preventDefault();
	toggleMenu();
});
document.querySelector('main').addEventListener('click', function(){
	removeMenu();
});

// close by esc

document.addEventListener('keyup', function(e) {
	if (e.keyCode === 27) {
		removeMenu()
	}
})

// back

function goBack() {
	window.history.back();
}

// password validation

var password = document.getElementById('password');
var confirmedPassword = document.getElementById('confirmed_password');

function validatePassword(){
	if (password.value != confirmedPassword.value) {
		confirmedPassword.setCustomValidity("Passwords Don't Match");
	}	else {
			confirmedPassword.setCustomValidity('');
	}	
}

password.onchange = validatePassword;
confirmedPassword.onkeyup = validatePassword;

// forms validation (requires adding "novalidate" attribute to <form> tag")

function validateForm() {
	var validation = document.forms["myForm"]["signup"].value;
	if (validation == "") {
		alert("Please fill \"Signup\" field");
		return false;
	}
}

// closing modals;

// close by removing .show; create function and attach it to buttons with proper class;

function closeModal() {
	document.getElementById('overlay').classList.remove('show')
}
// close by click on button
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn){
	btn.addEventListener('click', function(e){
		e.preventDefault()
		closeModal()
	})
})
// close by click outside modal
document.querySelector('#overlay').addEventListener('click', function(e) {
	if (e.target === this) {
		closeModal()
	}
})
// close by click esc
document.addEventListener('keyup', function(e) {
	if (e.keyCode === 27) {
		closeModal()
	}
})

//open modal

//first close all modals then open chosen one

function openModal(modal) {
	document.querySelectorAll('#overlay > *').forEach(function(modal) {
		modal.classList.remove('show')
	}) // it closed all modals
	document.querySelector('#overlay').classList.add('show')
	document.querySelector(modal).classList.add('show')
}








