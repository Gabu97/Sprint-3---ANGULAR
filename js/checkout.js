// Exercise 6
function validate() {
  error = 0;

  var regexName = /^[A-Za-z ]+$/;
  var regexPhone = /^[1-9]\d{8}$/;
  var regexPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[=/\\\.@\+!$%*#?&])[/\\\A-Za-z\d\.@!\+$%*#?&=]{8,}$/;
  var regexEmail = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fLastN = document.getElementById("fLastN");
  var fPhone = document.getElementById("fPhone");
  var fPassword = document.getElementById("fPassword");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorLastN = document.getElementById("errorLastN");
  var errorPhone = document.getElementById("errorPhone");
  var errorPassword = document.getElementById("errorPassword");

  // Validate fields entered by the user: name, phone, password, and email
  if (fName.value == "" || fName.value.length < 3) {
    fName.style.border = "2px solid red";
    errorName.classList.add("invalid-feedback");
    errorName.classList.add("d-block");
  } else {
    if (regexName.test(fName.value) == false) {
      fName.style.border = "2px solid red";
      errorName.classList.add("invalid-feedback");
      errorName.classList.add("d-block");
    }
  }

  if (fEmail.value == "" || fEmail.value.length < 3) {
    fEmail.style.border = "2px solid red";
    errorEmail.classList.add("invalid-feedback");
    errorEmail.classList.add("d-block");
    error++;
  } else {
    if (regexEmail.test(fEmail.value) == false) {
      fEmail.style.border = "2px solid red";
      errorEmail.classList.add("invalid-feedback");
      errorEmail.classList.add("d-block");
    }
  }

  if (
    fAddress.value == "" ||
    fAddress.value.length < 3 ||
    regexName.test(fAddress.value) == false
  ) {
    fAddress.style.border = "2px solid red";
    errorAddress.classList.add("invalid-feedback");
    errorAddress.classList.add("d-block");
    error++;
  } 

  if (
    fLastN.value == "" ||
    fLastN.value.length < 3 ||
    regexName.test(fLastN.value) == false
  ) {
    fLastN.style.border = "2px solid red";
    errorLastN.classList.add("invalid-feedback");
    errorLastN.classList.add("d-block");
    error++;
  } 

  if (fPhone.value == "" || regexPhone.test(fPhone.value) == false) {
    fPhone.style.border = "2px solid red";
    errorPhone.classList.add("invalid-feedback");
    errorPhone.classList.add("d-block");
    error++;
  } 

  if (
    fPassword.value == "" ||
    fPassword.value.length < 3 ||
    regexPassword.test(fPassword.value) == false
  ) {
    fPassword.style.border = "2px solid red";
    errorPassword.classList.add("invalid-feedback");
    errorPassword.classList.add("d-block");
    error++;
  } 

  if (error > 0 ){
    alert("ERROR") 
  } else {
    OK
  }

  }

