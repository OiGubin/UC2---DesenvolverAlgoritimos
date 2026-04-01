const prompt = require('prompt-sync')()

let nome = prompt("Escreva seu nome:")
let idade = prompt("Por favor mencione sua idade ao lado:")
let hobby = prompt("o que o senhor/a gosta de fazer?")
let anime = prompt("mencione seu anime favorito:")
let serie = prompt("seriado favorito:")
let curiosidada = prompt("uma curiosidade sobre o senhor:")
let time = prompt("qual seu time do coração?")

console.log(`Então seu nome é ${nome} e tem ${idade} de idade, seu hobby é ${hobby} e seu anime favorito é ${anime}, muito bom ${serie}, mas me fala ai, é serio que voce deixou de ${curiosidada}... mas mudando de assunto, serio que voce é do ${time}? `)