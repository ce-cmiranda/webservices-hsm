const fs = require("fs"); 
  
// STEP 1: Reading JSON file 
const servicos = require("./servicos"); 
   
// Defining objects
function Hotel(name, categoria, preco) {

    this.name = name;
    this.categoria = categoria;
    this.preco = preco;

    this.info = function() {
        return `${this.name} ${this.categoria}, ${this.preco}`;
    }
}

function Aerea(name, categoria, preco) {

    this.name = name;
    this.categoria = categoria;
    this.preco = preco;

    this.info = function() {
        return `${this.name} ${this.categoria}, ${this.preco}`;
    }
}

function Cotacao(aereas, hoteis, dias) {

    this.aereas = aereas;
    this.hoteis = hoteis;
    this.dias = dias;

    this.info = function() {
        return `${this.aereas} ${this.hoteis}, ${this.preco}`;
    }
}

// List of values
hoteis = [
    ['Ibis', '4', '150'],
    ['Mercure', '5', '300'],
    ['Novo', '3', '80']
]

aereas = [
    ['Gol', 'Econômica', '300'],
    ['Latam', 'Executiva', '500'],
    ['Azul', 'Primeira Classe', '700']
]

cotacao = [
    [
        [aereas[1],aereas[2]],
        [hoteis[0],hoteis[2]],
        5
    ],    
    [
        [aereas[0],aereas[2]],
        [hoteis[1],hoteis[2]],
        10
    ],
    [
        [aereas[1],aereas[2]],
        [hoteis[0],hoteis[2]],
        3  
    ]
]

for(i of hoteis){
    let hotel = new Hotel(i[0], i[1], i[2]);
    servicos["hotel"].push(hotel);
}

for(i of aereas){
    let aerea = new Aerea(i[0], i[1], i[2]);
    servicos["aereas"].push(aerea);
}

for(i of cotacao){
    let cotacao = new Cotacao(i[0], i[1], i[2]);
    servicos["cotacoes"].push(cotacao);
}
// STEP 2: Adding new data to users object 


console.log(servicos);
// // STEP 3: Writing to a file 
fs.writeFile("servicos.json", JSON.stringify(servicos), err => { 
     
    // Checking for errors 
    if (err) throw err;  
   
    console.log("Done writing"); // Success 
}); 