const prompt = require('prompt-sync')()

let nome = prompt("qual é seu nome? ")
let idade = prompt("qual é sua idade? ")
let cidade = prompt("qual é sua cidade? ")

console.log(`confere se seu nome é ${nome} e sua idade é ${idade} e mora em ${cidade} `)