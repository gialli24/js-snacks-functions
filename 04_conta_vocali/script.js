/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function getVowelsCount(word) {
    let count = 0;

    for (const letter of word) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            count++;
        }
    }

    return count;
}

const vowelsCount = (word) => {
    let count = 0;

    for (const letter of word) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            count++;
        }
    }

    return count;
}


// Invoca la funzione qui e stampa il risultato in console
/* const vowelsCount = getVowelsCount(word); */
const count = vowelsCount(word);
console.log(count);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)