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