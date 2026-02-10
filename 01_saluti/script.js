/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

/* 
function greetPerson(person) {
    return "ciao " + person;
}
*/

/* 
const greetPerson = (userName) => {
    return `ciao ${userName}`;
} 
*/

const greetPerson = userName => `ciao ${userName}`;

// Invoca la funzione qui e stampa il risultato in console
const message = greetPerson(userName);
console.log(message);


//Risultato atteso se si passa 'Mario': // ciao Mario
