const mammiferi = []; //Array per raccogliere mammiferi

const animali = [
    {nome: "Cani", famiglia:"Canidi", classe:"Mammiferi"},
    {nome: "Puma", famiglia:"Felidi", classe:"Mammiferi"},
    {nome: "Farfalla", famiglia:"Lepidoptera", classe:"Insetti"},
    {nome: "Gabbiano", famiglia:"Laridae", classe:"Uccelli"},
    {nome: "Foca", famiglia:"Pennipedi", classe:"Mammiferi"},
    {nome: "Serpenti", famiglia:"Elapidi", classe:"Rettili"},    
    {nome: "Balena", famiglia:"Balaenidae", classe:"Mammiferi"}
]

animali.forEach(function (animale){ //Controlla se l'animale è un mammifero
    if(animale.classe === "Mammiferi"){
        mammiferi.push(animale);//E lo inserisce dentro il nuovo array
    }
});
console.log(mammiferi); //Manda in stampa
    