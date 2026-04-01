const prompt = require('prompt-sync')()

let nome = prompt("qual o seu nome? ")
let idade = prompt("qual a sua idade? ") 

console.log(`Olá ${nome} você tem ${idade} anos de idade.`)