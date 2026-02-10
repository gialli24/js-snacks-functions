/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitialsArray(names) {
    const initialsArray = [];

    for (const name of names) {
        const initial = name[0];
        initialsArray.push(initial);
    }

    return initialsArray;
}

// Invoca la funzione qui e stampa il risultato in console
const initials = getInitialsArray(names);
console.log(initials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]