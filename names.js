/*  Crea una funzione che accetta due parametri: firstName, lastName.La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName. */




//creo la funzione
function fullName(nome, cognome) {
    return {
        firstName: nome,
        lastName: cognome,

    }
}
//esporto il modulo 
module.exports = fullName