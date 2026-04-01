const prompt = require('prompt-sync' )()

let nome = prompt("qual seu nome?")
let profisao = prompt("oque o senhor trabalha?")
let arma = prompt("qual sua arma?")

console.log(`Senhor ${nome} trabalha como ${profisao} com sua carta na manga... a arma ${arma}` )