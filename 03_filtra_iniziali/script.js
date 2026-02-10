/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/* 
function filterByStartLetter(arr, filterChar) {
    const filteredArray = [];

    for (const str of arr) { 
        if (str[0] === filterChar) {
            filteredArray.push(str);
        }
    }

    return filteredArray;
} */

const startLetters = (arr, filterChar) => {
    const filteredArray = [];

    for (const str of arr) { 
        if (str[0] === filterChar) {
            filteredArray.push(str);
        }
    }

    return filteredArray;
}

// Invoca la funzione qui e stampa il risultato in console
/* const namesStartingWithA = filterByStartLetter(names, "A"); */
const namesStartingWithA = startLetters(names, "A");
console.log(namesStartingWithA);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]