// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


let giocatore = Math.floor(Math.random() * 5 +1);
console.log(giocatore);

let computer = Math.floor(Math.random() * 5 +1);
console.log(computer);

if (giocatore > computer) {
    document.getElementById("box").innerHTML =`Giocatore: Non vincerai mai! ${giocatore}`;
    document.getElementById("box_2").innerHTML =`Computer: Mi hai battuto ancora! ${computer}`;
} else if (giocatore == computer){
    document.getElementById("box").innerHTML =`Pari, rilancia i dadi: `;

}

else {
    document.getElementById("box_2").innerHTML =`Computer: Le macchine vinceranno sempre contro voi stupidi umani! ${computer}`;
    document.getElementById("box").innerHTML =`Giocatore: Sto per formattarti! ${giocatore}`;
}

        
