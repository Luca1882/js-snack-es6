//Dichiaro un array con nomi casuali

const mangaChar = ["GOKU", "aSHBORN", "iGRIs", "Antares", "BElze", "NAruTO"];


//Passo una funzione che mi modifichi le stringhe in minuscolo
function mancaCharFormat(carattere){
    return {
        carattereOriginale: carattere,
        carattereFormattato: carattere.charAt(0).toUpperCase() + carattere.slice(1).toLowerCase() //E poi le riporti con la prima lettera maiuscola
    };
}
const carattereNuovo = mangaChar.map(mancaCharFormat);

console.log(carattereNuovo);