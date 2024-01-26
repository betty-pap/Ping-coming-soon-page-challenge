let emailAddress = document.querySelector('.email');
let error = document.querySelector('.error');
let button = document.querySelector('[type="submit"]');
let form = document.querySelector('form');
let input = document.getElementById('email');


// error messege//
function checkEmail (e) {
  e.preventDefault();
  let email = e.target.querySelector('[type="email"]').value;
  if (!validateEmail(email)){
    error.style.display = "block";
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "green";
    error.style.display = "none";
  }
}

// email checking //

function validateEmail (email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', checkEmail);