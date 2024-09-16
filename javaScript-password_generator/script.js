let passwordLength = document.getElementById("inputSlider").value;
let complexity = document.getElementById("complexity").value;
let showPassword = document.getElementById("passBox");
let numbers = "0123456789";
let password = ""

const capital_alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_alpha = "abcdefghijklmnopqrstuvwxyz";

const delimiters = ",; \t|:-_/$\\~@#^&%*()[]{}";


let low = capital_alpha + lowercase_alpha;
let medium = lowercase_alpha + capital_alpha + numbers;
let high = lowercase_alpha + capital_alpha + numbers + delimiters;


function generatePassword() {
    password = "";

    if (complexity === "LOW") {
        for (let item = 0; item < passwordLength +  1; item++) {
            let index = Math.floor(Math.random() * low.length)
            password += low.charAt(index)
            showPassword.value = password
        }

    } else if (complexity === "MEDIUM" ) {
        for (let item = 0; item < passwordLength + 1; item++) {
            let index = Math.floor(Math.random() * medium.length)
            password += medium.charAt(index)
        }

    } else  {
        for (let item = 0; item < passwordLength + 1; item++) {
            let index = Math.floor(Math.random() * high.length)
            password += high.charAt(index)
        }

    }
    // showPassword.value = password
};

function updateSliderInput(val) {
    document.getElementById("textInput").value = val
}