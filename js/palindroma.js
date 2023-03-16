
// Palidroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma




let inputText = document.querySelector("#input-text");
let textResult = document.querySelector("#show-result");
let btnText = document.querySelector("#btn-text");

btnText.addEventListener("click", checkPalidrome);

function checkPalidrome(){
    let inputValue = inputText.value;
    let reverse = inputText.value.split("").reverse().join("");
    if(inputValue != reverse){
        return textResult.innerHTML = "no"
    }
    textResult.innerHTML = "si"
}

