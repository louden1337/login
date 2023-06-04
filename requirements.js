var myInput = document.getElementById("pwd");
var myInput2 = document.getElementById("confirmation");
var length = document.getElementById("length");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var confirm = document.getElementById("confirm");

myInput2.onkeyup = function() {
    if (myInput.value != myInput2.value) {
        confirm.classList.add("invalid");
        confirm.classList.remove("valid");
    } else {
        confirm.classList.add("valid");
        confirm.classList.remove("invalid");
    }
}

myInput.onkeyup = function() {
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    if(myInput.value.length >=8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
    if (myInput.value != myInput2.value) {
        confirm.classList.add("invalid");
        confirm.classList.remove("valid");
    } else {
        confirm.classList.add("valid");
        confirm.classList.remove("invalid");
    }
}   



