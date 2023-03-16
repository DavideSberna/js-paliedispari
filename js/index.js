
// Palidroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


let inputNumber = document.querySelector("#input-number");
let select = document.querySelector("#select");
let btnNumber = document.querySelector("#btn-number");
let h3Text = document.querySelector("#show-result");


btnNumber.addEventListener("click", calculateNumber);
inputNumber.addEventListener("click", inputKeyUp);

function inputKeyUp(){
return inputNumber.value
}


function calculateNumber(num1, num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let sum = num1 + num2;
    let win;
    if(sum % 2 === 0){
       if(select.value !== "pari"){
          return win = false;
       } else{
           return win = true;
       }
    }
    if(sum % 2 !== 0){
        if(select.value === "pari"){
            return win = false;
         } else{
             return win = true;
         }
    }
}

let inputKey = inputKeyUp()
let random = getRandomInt(1 , 6);
let winner = calculateNumber(inputKey, random)
console.log("input",inputKey)
console.log("random",random)
console.log("Hai vinto?", winner)


function drowwinner(bool){
if(bool){
    h3Text.innerHTML = "hai vinto"
} else {
    h3Text.innerHTML = "hai perso"
}
}
drowwinner(winner)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

