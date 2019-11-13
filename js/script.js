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
		removeMenu();
	}
})

// back

function goBack() {
	window.history.back();
}
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
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		e.preventDefault()
		closeModal()
	})
})

// close by click outside modal
document.querySelector('#overlay').addEventListener('click', function(e) {
	if(e.target === this) {
		closeModal()
	}
})
// close by click esc
document.addEventListener('keyup', function(e) {
	if (e.keyCode === 27) {
		closeModal();
	}
})

/*open modal
first close all modals then open chosen one*/

function openModal(modal) {
	document.querySelectorAll('#overlay > *').forEach(function(modal) {
		modal.classList.remove('show')
	})
	document.querySelector('#overlay').classList.add('show')
	document.querySelector(modal).classList.add('show')
}

// charts

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
// 1
	type: 'bar',
	data: {
// 2
	labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
// 3
	datasets: [{
// 4
		label: "Signups",
// 5
		backgroundColor: '#8DBEC8',
		borderColor: '#8DBEC8',
// 6
		data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
	},
	{
		label: "FTD",
		backgroundColor: '#F29E4E',
		borderColor: '#F29E4E',
		data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
	},
	{
		label: "Earned",
		backgroundColor: '#71B374',
		borderColor: '#71B374',
		data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
// 7
		hidden: true,
		}]
	},
});
