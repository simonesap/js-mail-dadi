// Create 3 cartelle dentro la stessa repo, una per ogni esercizio
// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// (non usare INCLUDES)

let utenti = ['pierpaolo19@gmail.com', 'marco25@outlook.it', 'asdrubale90@icloud.com', 'francesco17@gmail.com', 'mariosuper@icloud.com'];

let mailUtente = prompt('Inserisci la tua mail:');

let mailTrovata = false;

for ( let i = 0; i < utenti.length; i++) {
    if (mailUtente == utenti[i]) {
        mailTrovata = true;
    } 
}

if (mailTrovata == true) {
    document.getElementById('prompt').innerHTML = `Utente registrato!`;
   
    } else {
        document.getElementById('prompt').innerHTML = `Per favore inserisci una mail valida: `;
    }