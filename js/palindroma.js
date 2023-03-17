
// Palidroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma




let inputText = document.querySelector("#input-text");
let textResult = document.querySelector("#palindrome-result");
let btnText = document.querySelector("#btn-text");


inputText.addEventListener("click", deleteInputValue);
inputText.addEventListener("keyup", styleInputValue);
btnText.addEventListener("click", checkPalidrome);
let inputValue;

function styleInputValue(){
    
}

function deleteInputValue(){
    inputText.value = "";
}



function valueReverse(){
    let reverse = valueRegex().split("").reverse().join("");
    return reverse
}
function valueRegex(){
    let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    inputValue = inputText.value;
    let lowerReg =  inputValue.toLowerCase().replace(regex, "");
    return lowerReg
}


function checkPalidrome(){
    if(!isNaN(inputValue) || inputValue === ""){
        alert("Contenuto non valido")
    } else if (valueRegex() == valueReverse()){
        return textResult.innerHTML = `Si! - ${valueReverse()} - è palindrome`;
    }
    textResult.innerHTML = `No! - ${valueReverse()} - non è palindrome`;
}



