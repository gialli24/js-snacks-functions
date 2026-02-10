/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function getGreetPersonAtHour(name) {
    const hour = new Date().getHours();

    if (hour < 13) {
        return "buongiorno " + name;
    }

    if (hour > 13 && hour < 17) {
        return "buon pomeriggio " + name;
    }

    if (hour > 17) {
        return "buonasera " + name;
    }
}


// Invoca la funzione qui e stampa il risultato in console
const message = getGreetPersonAtHour(name);
console.log(message);



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.