
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


function calculateNumber(){
    let random = getRandomInt(1, 6);
    let user = parseInt(inputNumber.value);
    let sum = random + user;
    if(sum % 2 === 0){
        if(select.value !== "pari"){
            h3Text.innerHTML = "hai perso";
        } else{
            h3Text.innerHTML = "hai vinto";
        }
     }
     if(sum % 2 !== 0){
         if(select.value === "pari"){
            h3Text.innerHTML = "hai perso";
          } else{
            h3Text.innerHTML = "hai vinto";
          }
     }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  getRandomInt(1, 6)

