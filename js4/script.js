const personeGuida = []; //Array che conterrà i nuovi valori

const persone = [
    {nome: "Luca", cognome: "Notarfranco", eta: "42" },
    {nome: "Andrea", cognome: "Capitano", eta: "33" },
    {nome: "Federico", cognome: "Moro", eta: "28" },
    {nome: "Diego", cognome: "Leale", eta: "18" },
    {nome: "Carlo", cognome: "Verdi", eta: "14" },
    {nome: "Leandro", cognome: "Suarez", eta: "17" },
    {nome: "Giacomo", cognome: "Di Zio", eta: "42" },
    {nome: "Maria", cognome: "Rossi", eta: "39" },
    {nome: "Franco", cognome: "Italiano", eta: "48" },
    {nome: "Sara", cognome: "Guzzanti", eta: "6" },
];

persone.forEach(function (persona){ //Iterazione dell'array
     const result = { //Creato oggetto contenente i valori e la condizione
        nome: persona.nome,
        cognome: persona.cognome,
        etaGuida: persona.eta >= 18,
        frase: `${persona.nome} ${persona.cognome} ${persona.eta >= 18 ? "Può guidare" : "Non può guidare"}.`
     };
     personeGuida.push(result); //Push del risultato nell'array vuoto
});
console.log(personeGuida);// Manda in stampa