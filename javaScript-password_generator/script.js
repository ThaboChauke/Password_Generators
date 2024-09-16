let numbers = "0123456789";
let password = ""

const capital_alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_alpha = "abcdefghijklmnopqrstuvwxyz";

const delimiters = ",; \t|:-_/$\\~@#^&%*()[]{}";

let low = capital_alpha + lowercase_alpha;
let medium = lowercase_alpha + capital_alpha + numbers;
let high = lowercase_alpha + capital_alpha + numbers + delimiters;


function generatePassword() {
    let passwordLength = parseInt(document.getElementById("inputSlider").value);
    let complexity = document.getElementById("complexity").value;
    let showPassword = document.getElementById("passBox");

    password = "";

    if (complexity === "LOW") {
        for (let item = 0; item < passwordLength; item++) {
            let index = Math.floor(Math.random() * low.length);
            password += low.charAt(index);
        }

    } else if (complexity === "MEDIUM") {
        for (let item = 0; item < passwordLength; item++) {
            let index = Math.floor(Math.random() * medium.length);
            password += medium.charAt(index);
        }

    } else { 
        for (let item = 0; item < passwordLength; item++) {
            let index = Math.floor(Math.random() * high.length);
            password += high.charAt(index);
        }
    }

    showPassword.value = password;
}


function updateSliderInput(val) {
    document.getElementById("textInput").value = val
}

function copyPassword() {
    let password = document.getElementById("passBox").value;
    
    if (password !== "") {
        navigator.clipboard.writeText(password).then(function() {
            alert("Password copied to clipboard!");
        }).catch(function(error) {
            alert("Failed to copy password: " + error);
        });
    } else {
        alert("Generate a password first!");
    }
}