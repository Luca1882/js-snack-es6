//Dichiaro 3 variabili dove contenere separatamente i 3 array
let benzina = [];
let diesel = [];
let elettrica = [];

//Dichiaro un array di 10 oggetti
const automobili = [
    {marca : "Ferrai", modello : "SF90 Stradale", alimentazione : "Elettrica" },
    {marca : "Porsche", modello : "911 Carrera S", alimentazione : "Benzina" },
    {marca : "Maserati", modello : "GT 2 Stradale", alimentazione : "Benzina" },
    {marca : "Lotus", modello: "Turbo Esprit 2.0", alimentazione: "Benzina" },
    {marca: "Mercedes", modello: "EQE 4Matic AMG", alimentazione: "Elettrica" },
    {marca: "Audi", modello: "S e-Tron GT 4", alimentazione: "Elettrica" },
    {marca: "Hyundai", modello: "I 30", alimentazione: "Diesel" },
    {marca: "Citroen", modello: "C4 Blue Hdi 110", alimentazione: "Diesel" },
    {marca: "Volvo", modello: "XC 40 2.0 D4", alimentazione: "Diesel" },
    {marca: "Tesla", modello: "Model 3", alimentazione: "Elettrica" },
]

//Itero l'array per andare a pushare i valori di "Alimentazione"
for (let i = 0; i < automobili.length; i++) {
    if(automobili[i].alimentazione === "Benzina"){
        benzina.push(automobili[i]);
    } else if (automobili[i].alimentazione === "Diesel"){
        diesel.push(automobili[i]);
    } else if (automobili[i].alimentazione === "Elettrica"){
        elettrica.push(automobili[i]);
    }
}

//Mando in stampa
console.log({benzina});
console.log({diesel});
console.log({elettrica});