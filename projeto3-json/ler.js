const fs = require("fs"); 
   
// Read users.json file 
fs.readFile("servicos.json", function(err, data) { 
      
    // Check for errors 
    if (err) throw err; 
   
    // Converting to JSON 
    const servicos = JSON.parse(data); 
      
    console.log(servicos.cotacoes[0].hoteis); // Print users  
}); 