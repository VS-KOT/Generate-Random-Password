//sliders and boxes
const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");

//elements

const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

//buttons

const generateBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyIcon");
const passIndicator = document.getElementById("passIndicator");

//storing letters numbers and symbols

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols =  "!@#$%^&*()_+-=[]{}\\|;:'\",./<>?";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent = inputSlider.value;
    generatePassword();
});

function generatePassword(){
    const length = inputSlider.value;
    let characters = "";
    let password = "";


    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numbersEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";


    for(let i=0 ; i<length ; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passBox.value = password;
    updatePasswordIndicator();
}

generateBtn.addEventListener("click",()=>{
    generatePassword();
})


function updatePasswordIndicator(){
        
    const passwordStrength = getPasswordStrength(passBox.value);
    passIndicator.className = "pass-indicator " + passwordStrength;
}

function getPasswordStrength(password){
    if(password.length<=20){
         return "weak";
    }else if(password.length<=40){
        return "medium";
    }else{
        return "strong";
    }
}


window.addEventListener("DOMContentLoaded",()=>{
    updatePasswordIndicator();
})

copyBtn.addEventListener("click",()=>{

    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerHTML = '<i class="fas fa-check"></i>'; // Change the icon to a checkmark indicating successful copy
    
        setTimeout(() => {
            copyIcon.innerHTML = '<i class="fas fa-copy"></i>'; // Reset the icon to copy icon after 3 seconds
        }, 3000);
    }
    
})
