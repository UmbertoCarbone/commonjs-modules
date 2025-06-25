/* 
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri.
La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. */


//importo le funzioni
const fullName = require("./names.js")
const hobbies = require("./hobbies.js");

//richiamo la seconda funzione 

// loggo la funzione 
console.log(fullName)
console.log(hobbies)


function prova() {
    // const fullName = fullName("Umberto", "Carbone");
    // const hobbies = Hobbies("Programmazione", "Cinema", "Sport");
    // return fullName, hobbies

    const newObj = {
        fullName: fullName("Umberto", "Carbone"),
        hobbies: hobbies("Programmazione", "Sport", "Cinema")
    }


    return newObj;

    // return {
    //     fullName: fullName("Umberto", "Carbone"),
    //     hobbies: hobbies("Programmazione", "Sport", "Cinema")
    // }
}

console.log(prova())
