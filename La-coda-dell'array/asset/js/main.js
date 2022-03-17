// Esercizio Bonus:
// la coda dell' array
// Creare un array con un numero a piacere di elementi.
// Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell'array.
// Attenzione #1: quanti elementi minimo dovrà contenere l'array?
// Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.
// Extra Bonus
// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
// Attenzione #3: quali controlli dobbiamo fare sull'input dell'utente?
// Super Extra Bonus: chiedere all'utente anche quanti elementi vanno estratti dal fondo dell'array.
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

let costoCarburante = [1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0];

// Ciclo inverso
// for ( let i = costoCarburante.length; i >= costoCarburante.length -5; i-- ) {
//             document.getElementById('box').innerHTML += `<div>${costoCarburante[i]}</div>`;
//             console.log(costoCarburante[i])
// }

// Ciclo con il push per far inserire all'utente un nuovo numero al blocco del ciclo ma non corretto in questo caso
// let array [1,2,3,4,5,6,7,8,9,10];
// let nuovoNumero = prompt('Inserisci un nuovo numero');

// if ( array.length < 5) {
//     array.push(nuovoNumero);


console.log('Gli ultimi 5 elementi sono:')

// Ciclo normale partendo da -5 e proseguendo con i++
for ( let i = costoCarburante.length -5; i < costoCarburante.length; i++ ) {
    document.getElementById('box').innerHTML += `<div>${costoCarburante[i]}</div>`;
    const item = costoCarburante[i];
    console.log(item)
    console.log(costoCarburante[i]);
}

// Chiedere all'utente di quanti numeri vuole che sia composto l'array
const arr2ItemsNumber = parseInt(prompt('Quanti elementi deve contenere il secondo array?'));

if (isNaN(arr2ItemsNumber) && arr2ItemsNumber < 5) {
    console.log('Devi inserire un valore numerico maggiore o uguale a 5!');
} else {
    const array2 = [];

for (let i = 1; i<= arr2ItemsNumber ; i++) {
    const item = Math.floor(Math.random() * 100) + 1;
    array2.push(item);
}

// Come prima calcolare gli ultimi 5 elementi dell'array creato dall'utente
console.log('Il secondo array è: ', array2);
console.log('Gli ultimi 5 elementi sono:')
for (let i = array2.length - 5; i < array2.length; i++) {
    const item = array2[i];
    console.log(item);
}

// Super extra bonus
// Chieder all'utente anche quanti elementi estrarre dal fondo dell'array
const arr3ItemsNumber = parseInt(prompt('Quanti elementi deve contenere il terzo array?'));


if (isNaN(arr3ItemsNumber)){
    console.log("Per gli elementi da estrarre devi inserire un valore numerico");
} else {
    const itemsToExtract = parseInt(prompt("Quanti elementi deve estrarre dall'array?"));
}
if (isNaN(itemsToExtract) || itemsToExtract > arr3ItemsNumber) {
    console.log("Per gli elementi da estrarre devi inserire un valore numerico minore o uguale al numero di elementi dell'array");
} else {
    const array3 = [];
    for (let i = 1; i <= arr3ItemsNumber ; i++) {
    const item = Math.floor(Math.random() * 100) + 1;
    array3.push(item);
}

// Qui possiamo far vedewre l'interpolazione delle variabili nel template literal
console.log('Il terzo array è:', array3);
console.log(`Gli ultimi ${itemsToExtract} elementi sono:`);

for(let i = array3.length - itemsToExcract; i < array3.length; i++) {
    const item = array3[i];
    console.log(item);
}

// Ciclo con il push per far inserire all'utente un nuovo numero al blocco del ciclo ma non corretto in questo caso
// let array [1,2,3,4,5,6,7,8,9,10];
// let nuovoNumero = prompt('Inserisci un nuovo numero');

// if ( array.length < 5) {
//     array.push(nuovoNumero);
