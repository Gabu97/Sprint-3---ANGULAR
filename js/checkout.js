// Exercise 6
function validate() {
  var error = 0;
  var regexName = /^[A-Za-z ]+$/;
  var regexPhone = /^[1-9]\d{8}$/;
  var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[=/\\\.@\+!$%*#?&])[/\\\A-Za-z\d\.@!\+$%*#?&=]{8,}$/;
  var regexEmail = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fPhone = document.getElementById("fPhone");
  var fPassword = document.getElementById("fPassword");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorPhone = document.getElementById("errorPhone");
  var errorPassword = document.getElementById("errorPassword");

  // Validate fields entered by the user: name, phone, password, and email
  if (fName.value == "") {
    error++;
  } else {
    if (regexName.test(fName.value) == false) {
      fName.style.border = "2px solid red";
      errorName.classList.add("invalid-feedback");
      errorName.classList.add("d-block");
    }
  }

  if (fEmail.value == "") {
    error++;
  } else {
    if (regexEmail.test(fEmail.value) == false) {
      fEmail.style.border = "2px solid red";
      errorEmail.classList.add("invalid-feedback");
      errorEmail.classList.add("d-block");
    }
  }
  if (fPhone.value == "") {
    error++;
  } else {
    if (regexPhone.test(fPhone.value) == false) {
      fPhone.style.border = "2px solid red";
      errorPhone.classList.add("invalid-feedback");
      errorPhone.classList.add("d-block");
    }
  }
  if (fPassword.value == "") {
    error++;
  } else {
    if (regexPassword.test(fPassword.value) == false) {
      fPassword.style.border = "2px solid red";
      errorPassword.classList.add("invalid-feedback");
      errorPassword.classList.add("d-block");
    }
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
